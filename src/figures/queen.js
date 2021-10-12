import Figure from "../figures/figure.js"
import srcb from "../img/qB.png"
import srcw from "../img/qW.png";

export default class Queen extends Figure {
    constructor(name, x, y) {
        super(name, x, y);
    }

    srcB = srcb
    srcW = srcw

    getName() {
        return this.name;
    }
}