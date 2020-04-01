import {FocusNode} from "../models/focusNode"
import { FocusStat } from "../models/focusStat"

export class FocusNodeFactory {
    
    static make(
        id : string,
        name: string, 
        description: string,
        keywords: string,
        color: string,
        stat: FocusStat) : FocusNode {
            var tmpNode : FocusNode = {
                id : id,
                name : name,
                description : description,
                keywords : keywords,
                color: color,
                stat: stat
            }
            return tmpNode
    }


    static makeStat(
        acceleration: number,
        braking: number,
        speed: number,
        handling: number,
        styling : number) : FocusStat {
            var tmpNode : FocusStat = ({
                acceleration,
                speed,
                braking,
                handling,
                styling,
            })
            return tmpNode
    }
}