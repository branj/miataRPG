import { DIFFICULTIES } from "../Difficulties"
import { UTILS } from "../Utils"
import { FOCUS_NODES } from "../FocusNodes"
import { MATERIALS } from "../Materials"
import { ChallengeFactory } from "../../factories/ChallengeFactory"
import { JACK_CAR, TAKE_OFF_WHEEL, INSPECT_BRAKE_LINE, TAKE_NOTE } from "../steps/common"

export const FLUID_CHALLENGES = [
    ChallengeFactory.make(
        'Engine Oil and Filter', 
        'Check dem fluids',
        FOCUS_NODES[1],
        DIFFICULTIES[0],
        [MATERIALS[0]],
        [UTILS[0]],
        [JACK_CAR, TAKE_OFF_WHEEL, INSPECT_BRAKE_LINE, TAKE_NOTE],
    ),
    ChallengeFactory.make(
        'Flush Hydraulic Brake Fluid', 
        'This stuff can get greeezy',
        FOCUS_NODES[1],
        DIFFICULTIES[0],
        [MATERIALS[0]],
        [UTILS[0]],
        [JACK_CAR, TAKE_OFF_WHEEL, INSPECT_BRAKE_LINE, TAKE_NOTE],

    ),
    ChallengeFactory.make(
        'Flush Hydraulic Clutch Fluid', 
        'Smooth as silk...',
        FOCUS_NODES[1],
        DIFFICULTIES[0],
        [MATERIALS[0]],
        [UTILS[0]],
        [JACK_CAR, TAKE_OFF_WHEEL, INSPECT_BRAKE_LINE, TAKE_NOTE],

    ),
    ChallengeFactory.make(
        'Check coolant level', 
        'Walk in the park',
        FOCUS_NODES[1],
        DIFFICULTIES[0],
        [MATERIALS[0]],
        [UTILS[0]],
        [JACK_CAR, TAKE_OFF_WHEEL, INSPECT_BRAKE_LINE, TAKE_NOTE],

    ),
    // 2
    ChallengeFactory.make(
        'Change coolant', 
        'No big dal',
        FOCUS_NODES[1],
        DIFFICULTIES[1],
        [MATERIALS[0]],
        [UTILS[0]],
        [JACK_CAR, TAKE_OFF_WHEEL, INSPECT_BRAKE_LINE, TAKE_NOTE],

    ),
    ChallengeFactory.make(
        'Transmission Oil', 
        'At least not a huge job',
        FOCUS_NODES[1],
        DIFFICULTIES[1],
        [MATERIALS[0]],
        [UTILS[0]],
        [JACK_CAR, TAKE_OFF_WHEEL, INSPECT_BRAKE_LINE, TAKE_NOTE],

    ),
    ChallengeFactory.make(
        'Differential Oil', 
        'Miata miata',
        FOCUS_NODES[1],
        DIFFICULTIES[1],
        [MATERIALS[0]],
        [UTILS[0]],
        [JACK_CAR, TAKE_OFF_WHEEL, INSPECT_BRAKE_LINE, TAKE_NOTE],

    ),
    // 3
    ChallengeFactory.make(
        'Fuel Filter', 
        'Surely after 20 years that thing has gotten loose',
        FOCUS_NODES[1],
        DIFFICULTIES[2],
        [MATERIALS[0]],
        [UTILS[0]],
        [JACK_CAR, TAKE_OFF_WHEEL, INSPECT_BRAKE_LINE, TAKE_NOTE],

    ),
    ChallengeFactory.make(
        'Fuel Pump and Sock', 
        'Surely after 20 years that thing has gotten loose',
        FOCUS_NODES[1],
        DIFFICULTIES[2],
        [MATERIALS[0]],
        [UTILS[0]],
        [JACK_CAR, TAKE_OFF_WHEEL, INSPECT_BRAKE_LINE, TAKE_NOTE],

    ),
    ChallengeFactory.make(
        'Power Steering Fluid', 
        'Surely after 20 years that thing has gotten loose',
        FOCUS_NODES[1],
        DIFFICULTIES[2],
        [MATERIALS[0]],
        [UTILS[0]],
        [JACK_CAR, TAKE_OFF_WHEEL, INSPECT_BRAKE_LINE, TAKE_NOTE],

    ),
    ChallengeFactory.make(
        'Windshield Washer Fluid', 
        'Go for the best',
        FOCUS_NODES[1],
        DIFFICULTIES[2],
        [MATERIALS[0]],
        [UTILS[0]],
        [JACK_CAR, TAKE_OFF_WHEEL, INSPECT_BRAKE_LINE, TAKE_NOTE],
    )
]