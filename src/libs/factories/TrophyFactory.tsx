import { Trophy } from "../models/trophy"

export class TrophyFactory {
    static make(
        name: string, 
        description: string,
        ) : Trophy {    
            var trophy : Trophy = ({
              name,
              description,
            })
            return trophy
    }
}

