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
    [TrophyFactory.make('Brakes Trophy', 'Apprentice')],
    []
);
const LEVEL_2 = UtilFactory.make(
    100, 
    "Novice Challenge Reward",
    [TrophyFactory.make('Brakes Trophy', 'Novice')], 
    [],
)
const LEVEL_3 = UtilFactory.make(
    100, 
    "Pro Challenge Reward",
    [TrophyFactory.make('Brakes Trophy', 'Pro')], 
    [],
)

export const ENGINE_CHALLENGES = [
    ChallengeFactory.make(
        'Check for Harmonic Blancer Wobble', 
        'Miata wobble woes',
        FOCUS_NODES[2],
        DIFFICULTIES[0],
        [BRAKE_MATERIALS[0]],
        [UTILS[0]],
        [JACK_CAR, TAKE_OFF_WHEEL, INSPECT_BRAKE_LINE, TAKE_NOTE],
    ),
    ChallengeFactory.make(
        'Common Oil Leaks', 
        'Replace: CAS o-ring, PCV Valve Grommet, Replace Valve Cover Gasket, Replace the Oil Cap Gasket',
        FOCUS_NODES[2],
        DIFFICULTIES[0],
        [BRAKE_MATERIALS[1]],
        [UTILS[0]],
        [JACK_CAR, TAKE_OFF_WHEEL, LUBRICATE_SLIDER_PIN],

    ),
    ChallengeFactory.make(
        'Replace Spark Plugs and Wires', 
        'Do these at the same time',
        FOCUS_NODES[2],
        DIFFICULTIES[0],
        [BRAKE_MATERIALS[2]],
        [UTILS[0], LEVEL_1],
        [JACK_CAR, TAKE_OFF_WHEEL, INSPECT_PADS, TAKE_NOTE],
    ),
    ChallengeFactory.make(
        'Adjust Ignition Timing', 
        'Surely after 20 years that thing has gotten loose',
        FOCUS_NODES[2],
        DIFFICULTIES[0],
        [BRAKE_MATERIALS[3]],
        [UTILS[1], LEVEL_2],
        [ACCESS_BRAKE_CABLE, TIGHTEN_BRAKE_CABLE],

    ),
    ChallengeFactory.make(
        'Replace Air Filter', 
        'Surely after 20 years that thing has gotten loose',
        FOCUS_NODES[2],
        DIFFICULTIES[0],
        [BRAKE_MATERIALS[3]],
        [UTILS[1], LEVEL_2],
        [ACCESS_BRAKE_CABLE, TIGHTEN_BRAKE_CABLE],

    ),
    ChallengeFactory.make(
        'Clean Air Crossover tube ', 
        'Insure it is fastened with no leaks.',
        FOCUS_NODES[2],
        DIFFICULTIES[0],
        [BRAKE_MATERIALS[3]],
        [UTILS[1], LEVEL_2],
        [ACCESS_BRAKE_CABLE, TIGHTEN_BRAKE_CABLE],

    ),
    ChallengeFactory.make(
        'Inspect Throttle Cable', 
        "Remove slack as needed. Insure it's not holding the throttle plate open.",
        FOCUS_NODES[2],
        DIFFICULTIES[0],
        [BRAKE_MATERIALS[3]],
        [UTILS[1], LEVEL_2],
        [ACCESS_BRAKE_CABLE, TIGHTEN_BRAKE_CABLE],

    ),
    // 2
    ChallengeFactory.make(
        'Replace Belts', 
        "If it's cracked, fix it",
        FOCUS_NODES[2],
        DIFFICULTIES[1],
        [BRAKE_MATERIALS[3]],
        [UTILS[1], LEVEL_2],
        [ACCESS_BRAKE_CABLE, TIGHTEN_BRAKE_CABLE],

    ),
    ChallengeFactory.make(
        "Injector Cleaning & Seals", 
        "Clean the injector body",
        FOCUS_NODES[2],
        DIFFICULTIES[1],
        [BRAKE_MATERIALS[3]],
        [UTILS[1], LEVEL_2],
        [ACCESS_BRAKE_CABLE, TIGHTEN_BRAKE_CABLE],

    ),
    ChallengeFactory.make(
        "Replace coolant hoses", 
        "Clean the injector body",
        FOCUS_NODES[2],
        DIFFICULTIES[1],
        [BRAKE_MATERIALS[3]],
        [UTILS[1], LEVEL_2],
        [ACCESS_BRAKE_CABLE, TIGHTEN_BRAKE_CABLE],

    ),
    ChallengeFactory.make(
        "Check/Recharge A/C", 
        "Or maybe you want to remove it?",
        FOCUS_NODES[2],
        DIFFICULTIES[1],
        [BRAKE_MATERIALS[3]],
        [UTILS[1], LEVEL_2],
        [ACCESS_BRAKE_CABLE, TIGHTEN_BRAKE_CABLE],

    ),
    ChallengeFactory.make(
        "Compression Check", 
        "Easy or Hard",
        FOCUS_NODES[2],
        DIFFICULTIES[1],
        [BRAKE_MATERIALS[3]],
        [UTILS[1], LEVEL_2],
        [ACCESS_BRAKE_CABLE, TIGHTEN_BRAKE_CABLE],

    ),
    ChallengeFactory.make(
        "Thermostat", 
        "Easy or Hard",
        FOCUS_NODES[2],
        DIFFICULTIES[1],
        [BRAKE_MATERIALS[3]],
        [UTILS[1], LEVEL_2],
        [ACCESS_BRAKE_CABLE, TIGHTEN_BRAKE_CABLE],

    ),
    ChallengeFactory.make(
        "Radiator Cap", 
        "Easy or Hard",
        FOCUS_NODES[2],
        DIFFICULTIES[1],
        [BRAKE_MATERIALS[3]],
        [UTILS[1], LEVEL_2],
        [ACCESS_BRAKE_CABLE, TIGHTEN_BRAKE_CABLE],

    ),
    ChallengeFactory.make(
        "Check/Adjust TPS", 
        "Easy or Hard",
        FOCUS_NODES[2],
        DIFFICULTIES[1],
        [BRAKE_MATERIALS[3]],
        [UTILS[1], LEVEL_2],
        [ACCESS_BRAKE_CABLE, TIGHTEN_BRAKE_CABLE],

    ),
    ChallengeFactory.make(
        "1.6L, replace the Cursed Coolant Cap", 
        "Easy or Hard",
        FOCUS_NODES[2],
        DIFFICULTIES[1],
        [BRAKE_MATERIALS[3]],
        [UTILS[1], LEVEL_2],
        [ACCESS_BRAKE_CABLE, TIGHTEN_BRAKE_CABLE],
    ),
    // 3
    ChallengeFactory.make(
        'Replace Radiator', 
        'If any brake pads need replacing, replace them...consider doing with BR-4, BR-5, BR-6',
        FOCUS_NODES[2],
        DIFFICULTIES[2],
        [BRAKE_MATERIALS[2]],
        [UTILS[2]],
        [JACK_CAR, TAKE_OFF_WHEEL, CHANGE_PADS],

    ),
    ChallengeFactory.make(
        'Replace Engine Temperature Sensor', 
        'If any brake pads need replacing, replace them...consider doing with BR-4, BR-5, BR-6',
        FOCUS_NODES[2],
        DIFFICULTIES[2],
        [BRAKE_MATERIALS[2]],
        [UTILS[2]],
        [JACK_CAR, TAKE_OFF_WHEEL, CHANGE_PADS],

    ),
    ChallengeFactory.make(
        'Replace Water Pump, Timing Belt, Idler Bearings, Cam Seals, Front Main Seal.', 
        'If any brake pads need replacing, replace them...consider doing with BR-4, BR-5, BR-6',
        FOCUS_NODES[2],
        DIFFICULTIES[2],
        [BRAKE_MATERIALS[2]],
        [UTILS[2]],
        [JACK_CAR, TAKE_OFF_WHEEL, CHANGE_PADS],

    ),
    ChallengeFactory.make(
        'Oil, Transmission and Differential Drain Crush Washers', 
        'If any brake pads need replacing, replace them...consider doing with BR-4, BR-5, BR-6',
        FOCUS_NODES[2],
        DIFFICULTIES[2],
        [BRAKE_MATERIALS[2]],
        [UTILS[2]],
        [JACK_CAR, TAKE_OFF_WHEEL, CHANGE_PADS],

    ),
    ChallengeFactory.make(
        '1.6L, replace the unused oil return cap', 
        'Those calipers are probably very old, new calipers will go a long way',
        FOCUS_NODES[2],
        DIFFICULTIES[2],
        [BRAKE_MATERIALS[2]],
        [UTILS[2]],
        [JACK_CAR, TAKE_OFF_WHEEL, CHANGE_ROTORS],

    ),
    ChallengeFactory.make(
        'O2 Sensor(s)', 
        'Those calipers are probably very old, new calipers will go a long way',
        FOCUS_NODES[2],
        DIFFICULTIES[2],
        [BRAKE_MATERIALS[2]],
        [UTILS[2]],
        [JACK_CAR, TAKE_OFF_WHEEL, CHANGE_ROTORS],

    ),
    ChallengeFactory.make(
        'Refurbish or Replace Injectors', 
        'Those calipers are probably very old, new calipers will go a long way',
        FOCUS_NODES[2],
        DIFFICULTIES[2],
        [BRAKE_MATERIALS[2]],
        [UTILS[2]],
        [JACK_CAR, TAKE_OFF_WHEEL, CHANGE_ROTORS],

    )]