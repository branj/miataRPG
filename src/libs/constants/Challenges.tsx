import { BRAKE_CHALLENGES } from "./challenges/Brakes"
import { FLUID_CHALLENGES } from "./challenges/Fluids"
import { ELECTRICAL_CHALLENGES } from "./challenges/Electrical"
import { ENGINE_CHALLENGES } from "./challenges/Engine"
import { DRIVETRAIN_CHALLENGES } from "./challenges/DriveTrain"
import { CHASSIS_CHALLENGES } from "./challenges/Chassis"
import { INTERIOR_CHALLENGES } from "./challenges/InteriorTrunk"
import { NOISE_CHALLENGES } from "./challenges/Noise"


/**
 * @link http://wiki.miata.net/tiki-index.php?page=Baselining+Your+Car
 */

export const CHALLENGES = [
   ...BRAKE_CHALLENGES,
   ...FLUID_CHALLENGES,
   ...ENGINE_CHALLENGES,
   ...DRIVETRAIN_CHALLENGES,
   ...CHASSIS_CHALLENGES,
   ...ELECTRICAL_CHALLENGES,
   ...NOISE_CHALLENGES,
   ...INTERIOR_CHALLENGES
]

