import {Challenge, ChallengeStep} from "../models/challenge"
import { Difficulty } from "../models/difficulty"
import { Material } from "../models/material"
import { FocusNode } from "../models/models"
import { Util } from "../models/util"

export class ChallengeFactory {
    static make(
        name: string, 
        description: string,
        focus: FocusNode,
        difficulty: Difficulty,
        materials : Material[],
        utils: Util[],
        steps: ChallengeStep[]
        ) : Challenge {
            var completed = false    
            var challenge : Challenge = ({
              name,
              description,
              focus,
              completed,
              difficulty,
              materials,
              utils,
              steps  
            })
            challenge.completed = false
            return challenge
    }
    static makeStep(
      title: string, 
      subTitle: string,
      description: string,
      status: boolean,
      disabled: boolean = false,
      ) : ChallengeStep {
           
          var challengeStep : ChallengeStep = ({
            title,
            description,
            subTitle,
            status,
            disabled,
          })
          return challengeStep
  }
}

