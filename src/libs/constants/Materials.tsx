import { MaterialFactory } from "../factories/MaterialFactory"
import { REFERRERS } from "./Referrers"
import { ReferrerFactory } from "../factories/ReferrerFactory"

export const MATERIALS = [
    MaterialFactory.make(
        'Flexible Brake Line', 
        'Used for brakes',
        REFERRERS[0],
        25
    )
]

export const BRAKE_MATERIALS = [
    MaterialFactory.make(
        'Flexible Brake Line', 
        'Used for brakes',
         ReferrerFactory.makeItem(
             'Edelbrock RUS-685500 685500 Street Legal Brake Line Kit, 90-97 Mazda Miata',
             'https://amzn.to/2UCrXA8',
             '<a href="https://www.amazon.com/Edelbrock-Russell-685500-Brake-Hose/dp/B000CPJJUA/ref=as_li_ss_il?dchild=1&keywords=miata+brake+lines&qid=1585441954&sr=8-3&linkCode=li3&tag=99shaveclub-20&linkId=3f0f8d4decdf3864b24bb7728ceea5e5&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B000CPJJUA&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=99shaveclub-20&language=en_US" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=99shaveclub-20&language=en_US&l=li3&o=1&a=B000CPJJUA" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',                 
         ),
        116.26
    ),
    MaterialFactory.make(
        'Brake Slider Pins', 
        'Used for brakes',
         ReferrerFactory.makeItem(
             'Carlson Quality Brake Parts 16060 Pin Boot Kit',
             'https://amzn.to/2UKgOxu',
             '<a href="https://www.amazon.com/Carlson-Quality-Brake-Parts-16060/dp/B001089O0S/ref=as_li_ss_il?_encoding=UTF8&dchild=1&qid=1585443612&s=automotive&sr=1-3&vehicle=1997-80-1110------------2&vehicleName=1997+Mazda+Miata&linkCode=li3&tag=99shaveclub-20&linkId=d9c5e91dbf69ff9492f0d6d6c5d586da&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B001089O0S&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=99shaveclub-20&language=en_US" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=99shaveclub-20&language=en_US&l=li3&o=1&a=B001089O0S" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',                 
         ),
        9.51
    ),
    MaterialFactory.make(
        'Brake Pads and Rotors', 
        'Used for brakes',
         ReferrerFactory.makeItem(
             'Power Sport Slotted Brake Rotors and Ceramic Brake Pads Kit -80315 [Front & Rear]',
             'https://amzn.to/2UKgOxu',
             '<a href="https://www.amazon.com/XKAUDIE-Cable-Compatible-Phone-Cable-2/dp/B00LFPS4KC/ref=as_li_ss_il?dchild=1&keywords=brake+pads&pd_rd_r=f2a54605-4e1c-4e5b-bf6e-516fad2f037d&pd_rd_w=pNyhf&pd_rd_wg=8sfKi&pf_rd_p=314cba8a-9ad7-41b6-886d-7d421b3ca92e&pf_rd_r=KDAW4NZ30SPV2AN1YG15&qid=1585443785&s=automotive&sr=1-7&vehicle=1997-80-1110------------&vehicleName=1997+Mazda+Miata&linkCode=li3&tag=99shaveclub-20&linkId=58552591cb016ad18afeb9c15703ea3c&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00LFPS4KC&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=99shaveclub-20&language=en_US" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=99shaveclub-20&language=en_US&l=li3&o=1&a=B00LFPS4KC" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',                 
         ),
        122.02
    ),
    MaterialFactory.make(
        'Hand Brake Line', 
        'Used for brakes',
         ReferrerFactory.makeItem(
             'Motion Pro 02-0355 Black Vinyl Rear Hand Brake Cable',
             'https://amzn.to/3dBGF3g',
             '<a href="https://www.amazon.com/Motion-Pro-02-0355-Black-Vinyl/dp/B000GTUYDS/ref=as_li_ss_il?dchild=1&keywords=handbrake+cable&qid=1585444147&s=automotive&sr=1-4&linkCode=li3&tag=99shaveclub-20&linkId=5b325742b17c49a810974488f8c84e21&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B000GTUYDS&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=99shaveclub-20&language=en_US" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=99shaveclub-20&language=en_US&l=li3&o=1&a=B000GTUYDS" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',                 
         ),
        13.65
    )

]




