import { Difficulty } from "../models/difficulty"

export class DifficultyFactory {
    
    static make(
        id : number,
        name: string
    ) : Difficulty {
        
        var tmpDifficulty : Difficulty = ({
            id,
            name
        })
        return tmpDifficulty
    }
}