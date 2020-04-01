import { Material } from "../models/material"
import { ReferralObject } from "../models/referralObject"
import { ReferrerFactory } from "./ReferrerFactory";

export class MaterialFactory {
    static make(
        title: string, 
        description: string,
        referral: ReferralObject,
        cost:number,
        ) : Material {   
            var qty = 1; 
            var material : Material = ({
              title,
              description,
              referral,
              cost,
              qty
            })
            return material
    }
    static empty() : Material {   
          var material : Material = ({
            title : 'Empty',
            description : 'None',
            referral : ReferrerFactory.make(),
            cost : 0,
            qty : 0
          })
          return material
  }
}

