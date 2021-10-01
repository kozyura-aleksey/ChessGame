import Figure from "./figure"
import srcb from "../img/kB.png";
import srcw from "../img/kW.png";

export default class Knight extends Figure {
    constructor(name, x, y) {
        super(name, x, y);
    }

    srcB = srcb
    srcW = srcw

    getName() {
        return this.name;
    }
}