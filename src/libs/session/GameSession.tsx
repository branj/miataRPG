import { Challenge } from "../models/challenge"
import { FocusNode } from "../models/models";
import { Player } from "../models/player";
import { CHALLENGES } from "../constants/Challenges";
import { Trophy } from "../models/trophy";
import { Material } from "../models/material";
import { FocusStat } from "../models/focusStat";
import { FocusNodeFactory } from "../factories/FocusNodeFactory";
import { DIFFICULTIES } from "../constants/Difficulties";
import { MaterialFactory } from "../factories/MaterialFactory";
import { ColorObject } from "../constants/ux/colors";

export interface GameSessionMessage {
    title : string,
    description : string,
    color : string
}

export default class GameSession {
    
    _player: Player
    _progress: Array<Challenge>
    _callback: any

    constructor(callback: any) {
        this._player = GameSession.getPlayer()[0]
        this._progress = GameSession.get()
        this._callback = callback
    }

    private runCallback(message:GameSessionMessage) {
        this._callback(message)
    }

    getMaterial(material : Material) : Material {
        var m = this.player().materials.find(e => e.title === material.title)
        if( m !== undefined) {
            return m 
        }
        return MaterialFactory.empty()
    }

    hasMaterial(material : Material) : boolean {
        return this.getMaterial(material) !== undefined
    }

    player() : Player {
        return this._player
    }

    progress() : Challenge [] {
        return this._progress
    }

    locked(challenge : Challenge) : boolean {
        var diff = challenge.difficulty;
        var points = this.points();

        var maxPoints = GameSession.maxPoints();
        var threshHold = maxPoints/DIFFICULTIES.length;

        return (points+1) <= threshHold * (diff.id-1)/DIFFICULTIES.length
    }

    points(nodeType? : FocusNode) : number {
        var points = 0;
        var progress = this._progress
        if (nodeType !== undefined) {
            progress = progress.filter(e => e.focus.id === nodeType.id)
        }
        progress.forEach((c) => {
            if(c.completed) {
                c.utils.forEach(util => {
                    points += util.points
                });
            }
        })
        return points
    }

    trophies() : Array<Trophy> {
        let rows: Trophy[] = [];
        this._progress.forEach(c => {
            (c.completed) ?
                c.utils.forEach(
                    (ut) => {
                        rows = [...rows, ...ut.trophies]
                    }
                ) 
          : console.log('figure out this log')
            
        });
        return rows;
    }

    givePlayerMaterials(materials : Material[]) : void {
        if(materials.length === 0) return
        let message: GameSessionMessage = {title:'Materials Earned!', description: materials.length + ' added to you account', color: 'green'}
        this._player.materials = this._player.materials.concat(materials)
        GameSession.setPlayer(this._player)
        this.runCallback(message)
    }

    takePlayerMaterials(materials : Material[]) : void {
        if(materials.length === 0) return
        let message: GameSessionMessage = {title:'Materials Spent!', description: materials.length + ' were removed', color: 'red'}
        this._player.materials = this._player.materials.filter( (pm) => {
            return materials.find(m => m.title === pm.title) === undefined
        })
        
        GameSession.setPlayer(this._player)
        this.runCallback(message)
    }

    getPlayerRank() : string {
        var points = this.points()
        var maxPoints = GameSession.maxPoints()
        var threshHold = maxPoints/DIFFICULTIES.length;
        console.log(Math.floor(points/threshHold))
        return DIFFICULTIES[Math.floor(points/threshHold)-1].name 
    }

    getStatsProgress(challenge? : Challenge) {
        var total = GameSession.getChallengesStat();
        var beatenChallenges  = this.completedChallenges();
        var beaten = GameSession.mergeChallengeStats(beatenChallenges.map(c => GameSession.getChallengeStat(c)));
        var progress = beaten;
        var returnVar = [];

        if (challenge) {
            progress = GameSession.mergeChallengeStats([progress, GameSession.getChallengeStat(challenge)])       
        }

        for (let [key, value] of Object.entries(total)) {
            var tmp = {
                name: key,
                percent: Math.floor(beaten[key]/value * 100),
                progressPercent: Math.floor(progress[key]/value * 100)
            }
            
            returnVar.push(tmp)
        }
        return returnVar;
    } 

    completedChallenges() : Challenge [] {
        var current = GameSession.get();
        var beaten = current.filter(v => v.completed)
        return beaten
    }

    complete(challenge : Challenge) : void {
        var current = this._progress
        var updated = current.map((v) => { 

            if( challenge.name === v.name ) {
                v.completed = true
                //v.completedOn = Date.now()
            }
            return v
        })
        var nextChallenge = this.getNextChallenge(challenge);
        sessionStorage.setItem('game', JSON.stringify (updated))
        this.takePlayerMaterials(challenge.materials)  
        if(nextChallenge !== undefined) {
            this.givePlayerMaterials(nextChallenge.materials)   
        }
    }

    getNextChallenge(challenge : Challenge) : Challenge | undefined {
        var unbeaten = this._progress.filter(c => (c.focus.id === challenge.focus.id) && !c.completed)
        return unbeaten[0]
    }

    updatePlayer(name: string, color: ColorObject) {
        this._player.name = name;
        this._player.color = color.value;
        GameSession.setPlayer(this._player)
        let message: GameSessionMessage = {title:'Player Updated!', description: '', color: 'red'}
        this.runCallback(message)
    }

    static mergeChallengeStats(stats:FocusStat[]) : FocusStat{
        var baseStat = FocusNodeFactory.makeStat(0,0,0,0,0);
        stats.forEach(basket => { 
          for (let [key, value] of Object.entries(basket)) {
            if (baseStat[key]) { 
              baseStat[key] += value; 
            } else { 
              baseStat[key] = value;
            }
          }
        });
        return baseStat;
    };

    static maxPoints(nodeType? : FocusNode) : number {
        var points = 0;
        var progress = CHALLENGES;
        if (nodeType !== undefined) {
            progress = progress.filter(e => e.focus.id === nodeType.id)
        }
        progress.forEach((c) => {
            c.utils.forEach((util:any) => {
                points += util.points
            });  
        })
        return points
    }

    static getChallengesStat() : FocusStat {
        return GameSession.mergeChallengeStats(CHALLENGES.map(c => GameSession.getChallengeStat(c)));
    }

    static getChallengeStat(challenge : Challenge) : FocusStat {
        var b = challenge.difficulty.id;
        var baseStat = FocusNodeFactory.makeStat(b, b, b, b, b);
        var focusStat = challenge.focus.stat;
        Object.keys(focusStat).forEach(s => s += baseStat);
        return focusStat;
    }
 
    static get() : Array<Challenge> {
        var game = sessionStorage.getItem('game')
        if (game === null) {
            return CHALLENGES
        }
        return JSON.parse(game)   
    }

    static getPlayer() : Array<Player> {
        var player = sessionStorage.getItem('players')
        if (player === null) {
            return []
        }
        return JSON.parse(player)   
    }

    static completedNodes(focusNode : FocusNode) : number {
        var current = GameSession.get();
        var beaten = current.filter(v => (focusNode.id === v.focus.id) && v.completed)
        return beaten.length
    }

    static setPlayer(player : Player) : void {
        var players = GameSession.getPlayer();
        var started = players.find(v => player.name === v.name)
        //if (started === undefined) {
            players[0] = player
            sessionStorage.setItem('players', JSON.stringify (players))
        //}     
    }
}