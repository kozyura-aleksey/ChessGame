import workWithDOM from "../game/dom";

var chessBoardFiguresArray = [
    [{ figure: "rB", mark: "A8" }, { figure: "kB", mark: "B8" }, { figure: "bB", mark: "C8" }, { figure: "qB", mark: "D8" }, { figure: "kingB", mark: "E8" }, { figure: "bB", mark: "F8" }, { figure: "kB", mark: "G8" }, { figure: "rB", mark: "H8" }],
    [{ figure: "pB", mark: "A7" }, { figure: "pB", mark: "B7" }, { figure: "pB", mark: "C7" }, { figure: "pB", mark: "D7" }, { figure: "pB", mark: "E7" }, { figure: "pB", mark: "F7" }, { figure: "pB", mark: "G7" }, { figure: "pB", mark: "H7" }],
    [{ figure: 0, mark: "A6" }, { figure: 0, mark: "B6" }, { figure: 0, mark: "C6" }, { figure: 0, mark: "D6" }, { figure: 0, mark: "E6" }, { figure: 0, mark: "F6" }, { figure: 0, mark: "G6" }, { figure: 0, mark: "H6" }],
    [{ figure: 0, mark: "A5" }, { figure: 0, mark: "B5" }, { figure: 0, mark: "C5" }, { figure: 0, mark: "D5" }, { figure: 0, mark: "E5" }, { figure: 0, mark: "F5" }, { figure: 0, mark: "G5" }, { figure: 0, mark: "H5" }],
    [{ figure: 0, mark: "A4" }, { figure: 0, mark: "B4" }, { figure: 0, mark: "C4" }, { figure: 0, mark: "D4" }, { figure: 0, mark: "E4" }, { figure: 0, mark: "F4" }, { figure: 0, mark: "G4" }, { figure: 0, mark: "H4" }],
    [{ figure: 0, mark: "A3" }, { figure: 0, mark: "B3" }, { figure: 0, mark: "C3" }, { figure: 0, mark: "D3" }, { figure: 0, mark: "E3" }, { figure: 0, mark: "F3" }, { figure: 0, mark: "G3" }, { figure: 0, mark: "H3" }],
    [{ figure: "pW", mark: "A2" }, { figure: "pW", mark: "B2" }, { figure: "pW", mark: "C2" }, { figure: "pW", mark: "D2" }, { figure: "pW", mark: "E2" }, { figure: "pW", mark: "F2" }, { figure: "pW", mark: "G2" }, { figure: "pW", mark: "H2" }],
    [{ figure: "rW", mark: "A1" }, { figure: "kW", mark: "B1" }, { figure: "bW", mark: "C1" }, { figure: "qW", mark: "D1" }, { figure: "kingW", mark: "E1" }, { figure: "bW", mark: "F1" }, { figure: "kW", mark: "G1" }, { figure: "rW", mark: "H1" }],
]

export default class Game {
    constructor(name) {
        this.name = name;
    }

    draw() {
        var dom = new workWithDOM();
        dom.createElement("table", "content");
        dom.createTableFromArray(chessBoardFiguresArray);
        dom.addDragAndDropOnTable();
        dom.showMoves();
    }
}

