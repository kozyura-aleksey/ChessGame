import Figure from "../figures/figure.js"
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