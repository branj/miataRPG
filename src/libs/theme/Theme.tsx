import { ColorObject, COLORS } from "../constants/ux/colors"

export class Theme {
    static color(color: string): ColorObject {
        var found =  COLORS.find(e => e.label.toUpperCase() === color.toUpperCase())
        if(found !== undefined) {
            return found
        } else {
            return COLORS[0]
        }
    }
}