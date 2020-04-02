import { DIFFICULTIES } from "../Difficulties"
import { UTILS } from "../Utils"
import { FOCUS_NODES } from "../FocusNodes"
import { BRAKE_MATERIALS } from "../Materials"
import { ChallengeFactory } from "../../factories/ChallengeFactory"
import { UtilFactory } from "../../factories/UtilFactory"
import { TrophyFactory } from "../../factories/TrophyFactory"
import { JACK_CAR, TAKE_OFF_WHEEL, CHANGE_ROTORS, INSPECT_BRAKE_LINE, TAKE_NOTE, LUBRICATE_SLIDER_PIN, ACCESS_BRAKE_CABLE, TIGHTEN_BRAKE_CABLE, INSPECT_PADS, CHANGE_PADS, REMOVE_BRAKE_FOOT_PADS, REPLACE_BRAKE_FOOT_PADS } from "../steps/common"

const LEVEL_1 =  UtilFactory.make(
    50, 
    "Apprentice Challenge Reward", 
    [TrophyFactory.make('Noise Trophy', 'Apprentice')],
    []
);
const LEVEL_2 = UtilFactory.make(
    100, 
    "Novice Challenge Reward",
    [TrophyFactory.make('Noise Trophy', 'Novice')], 
    [],
)
const LEVEL_3 = UtilFactory.make(
    150, 
    "Pro Challenge Reward",
    [TrophyFactory.make('Noise Trophy', 'Pro')], 
    [],
)

export const NOISE_CHALLENGES = [
    ChallengeFactory.make(
        'Inspect operation of all bulbs', 
        'Those brake lines are old...time take a closer look and see if they need to be replaced.',
        FOCUS_NODES[5],
        DIFFICULTIES[0],
        [BRAKE_MATERIALS[0]],
        [UTILS[0]],
        [JACK_CAR, TAKE_OFF_WHEEL, INSPECT_BRAKE_LINE, TAKE_NOTE],
    ),
    ChallengeFactory.make(
        'Clean battery terminals', 
        'Slider pins? This little guys chould be crustry',
        FOCUS_NODES[5],
        DIFFICULTIES[0],
        [BRAKE_MATERIALS[1]],
        [UTILS[0]],
        [JACK_CAR, TAKE_OFF_WHEEL, LUBRICATE_SLIDER_PIN],

    ),
    ChallengeFactory.make(
        'Inspect battery tie down assembly. The battery should be solidly mounted', 
        'Just verify they are indded good or bad',
        FOCUS_NODES[5],
        DIFFICULTIES[0],
        [BRAKE_MATERIALS[2]],
        [UTILS[0], LEVEL_1],
        [JACK_CAR, TAKE_OFF_WHEEL, INSPECT_PADS, TAKE_NOTE],
    ),
    ChallengeFactory.make(
        'Check Battery', 
        'With the car off, measure the voltage at the battery.  It should be 12v. With the car running, the voltage should be 13.8 minumum.',
        FOCUS_NODES[5],
        DIFFICULTIES[0],
        [BRAKE_MATERIALS[2]],
        [UTILS[0], LEVEL_1],
        [JACK_CAR, TAKE_OFF_WHEEL, INSPECT_PADS, TAKE_NOTE],
    ),
    ChallengeFactory.make(
        'Spend a day checking tightness of every bolt nut and screw you can see.', 
        'Just verify they are indded good or bad',
        FOCUS_NODES[4],
        DIFFICULTIES[0],
        [BRAKE_MATERIALS[2]],
        [UTILS[0], LEVEL_1],
        [JACK_CAR, TAKE_OFF_WHEEL, INSPECT_PADS, TAKE_NOTE],
    ),
    // 2
    ChallengeFactory.make(
        'Clean ignition switch', 
        'Surely after 20 years that thing has gotten loose',
        FOCUS_NODES[5],
        DIFFICULTIES[1],
        [BRAKE_MATERIALS[3]],
        [UTILS[1], LEVEL_2],
        [ACCESS_BRAKE_CABLE, TIGHTEN_BRAKE_CABLE],

    ),
    // 3
    ChallengeFactory.make(
        'Replace battery', 
        'If any brake pads need replacing, replace them...consider doing with BR-4, BR-5, BR-6',
        FOCUS_NODES[5],
        DIFFICULTIES[2],
        [BRAKE_MATERIALS[2]],
        [UTILS[2]],
        [JACK_CAR, TAKE_OFF_WHEEL, CHANGE_PADS],

    ), 
    ChallengeFactory.make(
        'Replace alternator', 
        'If any brake pads need replacing, replace them...consider doing with BR-4, BR-5, BR-6',
        FOCUS_NODES[5],
        DIFFICULTIES[2],
        [BRAKE_MATERIALS[2]],
        [UTILS[2], LEVEL_3],
        [JACK_CAR, TAKE_OFF_WHEEL, CHANGE_PADS],
    )]