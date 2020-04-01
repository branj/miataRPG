import {Player, PlayerTalent} from "../models/player"
import { Car } from "../models/car"
import { MATERIALS } from "../constants/Materials"

export default class PlayerFactory {
    
    static make(
        name: string, 
        avatar: string,
        description : string,
        color: string,
        car: Car,
        talents: Array<PlayerTalent>,
        ) : Player {
            var materials = MATERIALS
            var player : Player = {
               name,
               description,
               avatar,
               color,
               car,
               talents,
               materials
            }
            return player
    }
}