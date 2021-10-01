import Bishop from './bishop'
import King from './king'
import Knight from './knight.js'
import Pawn from './pawn'
import Queen from './queen'
import Rook from './rook'

export default class workWithDOM {

    createElement(name, place) {
        let element = document.createElement(name);
        let node = document.getElementById(place);
        try {
            node.appendChild(element);
            console.log("Element add");
        } catch {
            console.log("Element not added");
        }
    }

    createTableFromArray(array) {
        let m = 0;
        let element = document.getElementsByTagName('table')[0];
        for (let i = 0; i < array.length; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < array.length; j++) {
                let td = document.createElement('td');
                let img = document.createElement('img');
                if (m % 2 == 0) {
                    td.className = "light";
                } else {
                    td.className = "dark";
                }
                switch (array[i][j].figure) {
                    case 'pB':
                        td.appendChild(img);
                        let pawnB = new Pawn("Pawn");
                        img.src = pawnB.srcB;
                        img.id = pawnB.getName() + i + j
                        td.setAttribute("data-x", i);
                        td.setAttribute("data-y", j);
                        img.className = "Black";
                        td.id = array[i][j].mark;
                        break;
                    case 'rB':
                        td.appendChild(img);
                        let rookB = new Rook("Rook");
                        img.src = rookB.srcB;
                        img.id = rookB.getName() + i + j;
                        td.setAttribute("data-x", i);
                        td.setAttribute("data-y", j);
                        img.className = "Black";
                        td.id = array[i][j].mark;
                        break;
                    case 'kB':
                        td.appendChild(img);
                        let knightB = new Knight("Knight");
                        img.src = knightB.srcB;
                        img.id = knightB.getName() + i + j;
                        td.setAttribute("data-x", i);
                        td.setAttribute("data-y", j);
                        img.className = "Black";
                        td.id = array[i][j].mark;
                        break;
                    case 'bB':
                        td.appendChild(img);
                        let bishopB = new Bishop("Bishop");
                        img.src = bishopB.srcB;
                        img.id = bishopB.getName() + i + j;
                        td.setAttribute("data-x", i);
                        td.setAttribute("data-y", j);
                        img.className = "Black";
                        td.id = array[i][j].mark;
                        break;
                    case 'qB':
                        td.appendChild(img);
                        let queenB = new Queen("Queen");
                        img.src = queenB.srcB;
                        img.id = queenB.getName() + i + j;
                        td.setAttribute("data-x", i);
                        td.setAttribute("data-y", j);
                        img.className = "Black";
                        td.id = array[i][j].mark;
                        break;
                    case 'kingB':
                        td.appendChild(img);
                        let kingB = new King("King");
                        img.src = kingB.srcB;
                        img.id = kingB.getName() + i + j;
                        td.setAttribute("data-x", i);
                        td.setAttribute("data-y", j);
                        img.className = "Black";
                        td.id = array[i][j].mark;
                        break;
                    case 'pW':
                        td.appendChild(img);
                        let pawnW = new Pawn("Pawn");
                        img.src = pawnW.srcW;
                        img.id = pawnW.getName() + i + j;
                        td.setAttribute("data-x", i);
                        td.setAttribute("data-y", j);
                        img.className = "White";
                        td.id = array[i][j].mark;
                        break;
                    case 'rW':
                        td.appendChild(img);
                        let rookW = new Rook("Rook");
                        img.src = rookW.srcW;
                        img.id = rookW.getName() + i + j;
                        td.setAttribute("data-x", i);
                        td.setAttribute("data-y", j);
                        img.className = "White";
                        td.id = array[i][j].mark;
                        break;
                    case 'kW':
                        td.appendChild(img);
                        let knightW = new Knight("Knight");
                        img.src = knightW.srcW;
                        img.id = knightW.getName() + i + j;
                        td.setAttribute("data-x", i);
                        td.setAttribute("data-y", j);
                        img.className = "White";
                        td.id = array[i][j].mark;
                        break;
                    case 'bW':
                        td.appendChild(img);
                        let bishopW = new Bishop("Bishop");
                        img.src = bishopW.srcW;
                        img.id = bishopW.getName() + i + j;
                        td.setAttribute("data-x", i);
                        td.setAttribute("data-y", j);
                        img.className = "White";
                        td.id = array[i][j].mark;
                        break;
                    case 'qW':
                        td.appendChild(img);
                        let queenW = new Queen("Queen");
                        img.src = queenW.srcW;
                        img.id = queenW.getName() + i + j;
                        td.setAttribute("data-x", i);
                        td.setAttribute("data-y", j);
                        img.className = "White";
                        td.id = array[i][j].mark;
                        break;
                    case 'kingW':
                        td.appendChild(img);
                        let kingW = new King("King");
                        img.src = kingW.srcW;
                        img.id = kingW.getName() + i + j;
                        td.setAttribute("data-x", i);
                        td.setAttribute("data-y", j);
                        img.className = "White";
                        td.id = array[i][j].mark;
                        break;
                    case 0:
                        td.id = array[i][j].mark;
                        td.setAttribute("data-x", i);
                        td.setAttribute("data-y", j);
                        break;
                }
                m++;
                tr.appendChild(td);
            }
            m++;
            element.appendChild(tr);
        }
    }

    addDragAndDropOnTable() {
        let element = document.getElementsByTagName('table')[0];
        const tdElements = element.getElementsByTagName('td');
        for (let td of tdElements) {
            var allowdrop = function (event) {
                event.preventDefault();
            }

            var drag = function (event) {
                event.dataTransfer.setData('id', event.target.id);
                event.dataTransfer.setData('className', event.target.className);
            }

            var drop = function (event) {
                let idOld = event.target.id;
                let elementOld = document.getElementById(idOld);
                let itemId = event.dataTransfer.getData('id');
                let newElement = document.getElementById(itemId);
                let itemClassName = event.dataTransfer.getData('className');

                if (itemClassName == 'Black') {
                    if (event.target.className == 'Black') {
                    } else {
                        event.target.append(document.getElementById(itemId));
                    }
                    if (event.target.className == 'White') {
                        alert("Съел");
                        event.target.append(document.getElementById(itemId));
                        td.removeChild(elementOld);
                        td.appendChild(newElement);
                    }
                }
                if (itemClassName == 'White') {
                    if (event.target.className == 'White') {
                    }
                    else {
                        event.target.append(document.getElementById(itemId));
                    }
                    if (event.target.className == 'Black') {
                        alert("Съел");
                        event.target.append(document.getElementById(itemId));
                        td.removeChild(elementOld);
                        td.appendChild(newElement);
                    }
                }
            }
            td.draggable = true;
            td.ondragover = allowdrop;
            td.ondrop = drop;
            td.ondragstart = drag;
        }
    }

    insideChessBoard(array, x, y) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if ((x) || (x) || (y) || (y)) {
                    return false;
                } else
                    return true;
            }
        }
    }

    showMoves() {
        let element = document.getElementsByTagName('table')[0];
        const tdElements = element.getElementsByTagName('td');
        for (let td of tdElements) {
            const imgElements = td.getElementsByTagName('img');
            for (let img of imgElements) {
                switch (img.id) {
                    case 'Pawn10':
                        td.onmouseover = () => {
                            let x = td.dataset.x+2;
                            let y = td.dataset.y+2;
                            const tdMove = document.querySelectorAll('td[data-x={x}], td[data-y="y"]');
                            for (let tdM of tdMove) {
                                tdM.style.backgroundColor = "yellow";
                            }
                        }
                    case 'Pawn11':
                    case 'Pawn12':
                    case 'Pawn13':
                    case 'Pawn14':
                    case 'Pawn15':
                    case 'Pawn16':
                    case 'Pawn17':

                        break;
                    case 'Rook00':
                    case 'Rook07':

                        break;
                    case 'Knight01':
                    case 'Knight06':

                        break;
                    case 'Bishop02':
                    case 'Bishop05':

                        break;
                    case 'Quenn03':

                        break;
                    case 'King04':

                        break;
                    case 'Pawn60':
                    case 'Pawn61':
                    case 'Pawn62':
                    case 'Pawn63':
                    case 'Pawn64':
                    case 'Pawn65':
                    case 'Pawn66':
                    case 'Pawn67':

                        break;
                    case 'rW':

                        break;
                    case 'kW':

                        break;
                    case 'bW':

                        break;
                    case 'qW':

                        break;
                    case 'kingW':

                        break;
                    case 0:

                        break;
                }
            }
        }
    }



    deleteElement(name, place) {
        let element = document.createElement(name);
        let node = document.getElementById(place);
        try {
            node.removeChild(element);
            console.log("Element delete");
        } catch {
            console.log("Element not found or not deleted");
        }
    }
}
