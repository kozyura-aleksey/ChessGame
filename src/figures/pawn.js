import Figure from "../figures/figure.js"
import srcb from "../img/pB.png";
import srcw from "../img/pW.png";

export default class Pawn extends Figure {
    constructor(name, x, y) {
        super(name, x, y);
    }

    srcB = srcb
    srcW = srcw

    getName() {
        return this.name;
    }

    checkMove(x, y) {
        
    }
}