import Figure from "../figures/figure.js"
import srcb from '../img/kingB.png';
import srcw from '../img/kingW.png';


export default class King extends Figure {
    constructor(name, x, y) {
        super(name, x, y);
    }

    srcB = srcb
    srcW = srcw

    getName() {
        return this.name;
    }
}