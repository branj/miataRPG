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
    [TrophyFactory.make('Chassis Trophy', 'Apprentice')],
    []
);
const LEVEL_2 = UtilFactory.make(
    100, 
    "Novice Challenge Reward",
    [TrophyFactory.make('Chassis Trophy', 'Novice')], 
    [],
)
const LEVEL_3 = UtilFactory.make(
    150, 
    "Pro Challenge Reward",
    [TrophyFactory.make('Chassis Trophy', 'Pro')], 
    [],
)

export const CHASSIS_CHALLENGES = [
    ChallengeFactory.make(
        'Clean Sill Drain Holes', 
        'Those brake lines are old...time take a closer look and see if they need to be replaced.',
        FOCUS_NODES[4],
        DIFFICULTIES[0],
        [BRAKE_MATERIALS[0]],
        [UTILS[0]],
        [JACK_CAR, TAKE_OFF_WHEEL, INSPECT_BRAKE_LINE, TAKE_NOTE],
    ),
    ChallengeFactory.make(
        'Inspect rain rail drain funnels', 
        'Slider pins? This little guys chould be crustry',
        FOCUS_NODES[4],
        DIFFICULTIES[0],
        [BRAKE_MATERIALS[1]],
        [UTILS[0]],
        [JACK_CAR, TAKE_OFF_WHEEL, LUBRICATE_SLIDER_PIN],

    ),
    ChallengeFactory.make(
        'Clean A/C Drain', 
        'Just verify they are indded good or bad',
        FOCUS_NODES[4],
        DIFFICULTIES[0],
        [BRAKE_MATERIALS[2]],
        [UTILS[0], LEVEL_1],
        [JACK_CAR, TAKE_OFF_WHEEL, INSPECT_PADS, TAKE_NOTE],
    ),
    ChallengeFactory.make(
        'Clean under lower part of front fenders.', 
        'Just verify they are indded good or bad',
        FOCUS_NODES[4],
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
        'Lubricate seat tracks', 
        'Surely after 20 years that thing has gotten loose',
        FOCUS_NODES[4],
        DIFFICULTIES[1],
        [BRAKE_MATERIALS[3]],
        [UTILS[1], LEVEL_2],
        [ACCESS_BRAKE_CABLE, TIGHTEN_BRAKE_CABLE],

    ),
    ChallengeFactory.make(
        'Replace torn Shifter Boots', 
        'Surely after 20 years that thing has gotten loose',
        FOCUS_NODES[4],
        DIFFICULTIES[1],
        [BRAKE_MATERIALS[3]],
        [UTILS[1], LEVEL_2],
        [ACCESS_BRAKE_CABLE, TIGHTEN_BRAKE_CABLE],

    ),
    ChallengeFactory.make(
        'Clean under front fenders', 
        'Surely after 20 years that thing has gotten loose',
        FOCUS_NODES[4],
        DIFFICULTIES[1],
        [BRAKE_MATERIALS[3]],
        [UTILS[1], LEVEL_2],
        [ACCESS_BRAKE_CABLE, TIGHTEN_BRAKE_CABLE],

    ),
    ChallengeFactory.make(
        'Replace Windshield Wipers', 
        'Surely after 20 years that thing has gotten loose',
        FOCUS_NODES[4],
        DIFFICULTIES[1],
        [BRAKE_MATERIALS[3]],
        [UTILS[1], LEVEL_2],
        [ACCESS_BRAKE_CABLE, TIGHTEN_BRAKE_CABLE],

    ),
    // 3
    ChallengeFactory.make(
        'Clean and Lube Window Tracks', 
        'If any brake pads need replacing, replace them...consider doing with BR-4, BR-5, BR-6',
        FOCUS_NODES[4],
        DIFFICULTIES[2],
        [BRAKE_MATERIALS[2]],
        [UTILS[2]],
        [JACK_CAR, TAKE_OFF_WHEEL, CHANGE_PADS],

    )]