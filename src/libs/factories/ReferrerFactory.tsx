import { ReferralObject } from "../models/referralObject"

export class ReferrerFactory {
    static make() : ReferralObject {    
            var referrer : ReferralObject = {
                title: "Amazon Product",
                detailsUrl: "https://www.amazon.com/124",
                referralUrl: "https://www.amazon.com/124",
                referrerCode: "DZN"
            }
            return referrer
    }
    static makeItem(title: string, referralUrl: string, image: string ) : ReferralObject {    
        var referrer : ReferralObject = {
            title,
            referralUrl,
            image
        }
        return referrer
}
}
