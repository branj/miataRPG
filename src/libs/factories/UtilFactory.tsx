import { Util } from "../models/util"
import { Trophy } from "../models/trophy"
import { Material } from "../models/material"

export class UtilFactory {
    
    static make(
        points: number,
        label:string,
        trophies: Trophy[],
        materials: Material[],
    ) : Util {
        
        var tmpUtil : Util = ({
            points,
            label,
            trophies,
            materials
        })
        return tmpUtil
    }

}