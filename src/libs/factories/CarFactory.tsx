import {Car} from "../models/car"

export default class CarFactory {
    
    static make(
        make: string, 
        model: string,
        year: string,
        engine: string,
        transmission : string,
        imgUrl: string,
        ) : Car {
    
            var car : Car = {
                make : make,
                model : model,
                year : year,
                engine : engine,
                transmission: transmission,
                image : imgUrl
            }
            return car
    }
}