import Figure from "../figures/figure.js"
import srcb from "../img/bB.png";
import srcw from "../img/bW.png";


export default class Bishop extends Figure {
    constructor(name, x, y) {
        super(name, x, y);
    }

    srcB = srcb;
    srcW = srcw;

    getName() {
        return this.name;
    }
}