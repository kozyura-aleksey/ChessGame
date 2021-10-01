import Figure from "./figure"
import srcb from "../img/rB.png";
import srcw from "../img/rW.png";

export default class Rook extends Figure {
    constructor(name, x, y) {
        super(name, x, y);
    }

    srcB = srcb
    srcW = srcw

    getName() {
        return this.name;
    }
}