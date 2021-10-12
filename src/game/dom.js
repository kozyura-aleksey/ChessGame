import Bishop from '../figures/bishop.js'
import King from '../figures/king.js'
import Knight from '../figures/knight.js'
import Pawn from '../figures/pawn.js'
import Queen from '../figures/queen.js'
import Rook from '../figures/rook.js'

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
                        td.setAttribute("figure", pawnB.getName());
                        img.className = "Black";
                        td.setAttribute("color", "Black");
                        td.id = array[i][j].mark;
                        break;
                    case 'rB':
                        td.appendChild(img);
                        let rookB = new Rook("Rook");
                        img.src = rookB.srcB;
                        img.id = rookB.getName() + i + j;
                        td.setAttribute("data-x", i);
                        td.setAttribute("data-y", j);
                        td.setAttribute("figure", rookB.getName());
                        img.className = "Black";
                        td.setAttribute("color", "Black");
                        td.id = array[i][j].mark;
                        break;
                    case 'kB':
                        td.appendChild(img);
                        let knightB = new Knight("Knight");
                        img.src = knightB.srcB;
                        img.id = knightB.getName() + i + j;
                        td.setAttribute("data-x", i);
                        td.setAttribute("data-y", j);
                        td.setAttribute("figure", knightB.getName());
                        img.className = "Black";
                        td.setAttribute("color", "Black");
                        td.id = array[i][j].mark;
                        break;
                    case 'bB':
                        td.appendChild(img);
                        let bishopB = new Bishop("Bishop");
                        img.src = bishopB.srcB;
                        img.id = bishopB.getName() + i + j;
                        td.setAttribute("data-x", i);
                        td.setAttribute("data-y", j);
                        td.setAttribute("figure", bishopB.getName());
                        img.className = "Black";
                        td.setAttribute("color", "Black");
                        td.id = array[i][j].mark;
                        break;
                    case 'qB':
                        td.appendChild(img);
                        let queenB = new Queen("Queen");
                        img.src = queenB.srcB;
                        img.id = queenB.getName() + i + j;
                        td.setAttribute("data-x", i);
                        td.setAttribute("data-y", j);
                        td.setAttribute("figure", queenB.getName());
                        img.className = "Black";
                        td.setAttribute("color", "Black");
                        td.id = array[i][j].mark;
                        break;
                    case 'kingB':
                        td.appendChild(img);
                        let kingB = new King("King");
                        img.src = kingB.srcB;
                        img.id = kingB.getName() + i + j;
                        td.setAttribute("data-x", i);
                        td.setAttribute("data-y", j);
                        td.setAttribute("figure", kingB.getName());
                        img.className = "Black";
                        td.setAttribute("color", "Black");
                        td.id = array[i][j].mark;
                        break;
                    case 'pW':
                        td.appendChild(img);
                        let pawnW = new Pawn("Pawn");
                        img.src = pawnW.srcW;
                        img.id = pawnW.getName() + i + j;
                        td.setAttribute("data-x", i);
                        td.setAttribute("data-y", j);
                        td.setAttribute("figure", pawnW.getName());
                        img.className = "White";
                        td.setAttribute("color", "White");
                        td.id = array[i][j].mark;
                        break;
                    case 'rW':
                        td.appendChild(img);
                        let rookW = new Rook("Rook");
                        img.src = rookW.srcW;
                        img.id = rookW.getName() + i + j;
                        td.setAttribute("data-x", i);
                        td.setAttribute("data-y", j);
                        td.setAttribute("figure", rookW.getName());
                        img.className = "White";
                        td.setAttribute("color", "White");
                        td.id = array[i][j].mark;
                        break;
                    case 'kW':
                        td.appendChild(img);
                        let knightW = new Knight("Knight");
                        img.src = knightW.srcW;
                        img.id = knightW.getName() + i + j;
                        td.setAttribute("data-x", i);
                        td.setAttribute("data-y", j);
                        td.setAttribute("figure", knightW.getName());
                        img.className = "White";
                        td.setAttribute("color", "White");
                        td.id = array[i][j].mark;
                        break;
                    case 'bW':
                        td.appendChild(img);
                        let bishopW = new Bishop("Bishop");
                        img.src = bishopW.srcW;
                        img.id = bishopW.getName() + i + j;
                        td.setAttribute("data-x", i);
                        td.setAttribute("data-y", j);
                        td.setAttribute("figure", bishopW.getName());
                        img.className = "White";
                        td.setAttribute("color", "White");
                        td.id = array[i][j].mark;
                        break;
                    case 'qW':
                        td.appendChild(img);
                        let queenW = new Queen("Queen");
                        img.src = queenW.srcW;
                        img.id = queenW.getName() + i + j;
                        td.setAttribute("data-x", i);
                        td.setAttribute("data-y", j);
                        td.setAttribute("figure", queenW.getName());
                        img.className = "White";
                        td.setAttribute("color", "White");
                        td.id = array[i][j].mark;
                        break;
                    case 'kingW':
                        td.appendChild(img);
                        let kingW = new King("King");
                        img.src = kingW.srcW;
                        img.id = kingW.getName() + i + j;
                        td.setAttribute("data-x", i);
                        td.setAttribute("data-y", j);
                        td.setAttribute("figure", kingW.getName());
                        img.className = "White";
                        td.setAttribute("color", "White");
                        td.id = array[i][j].mark;
                        break;
                    case 0:
                        td.id = array[i][j].mark;
                        td.setAttribute("data-x", i);
                        td.setAttribute("data-y", j);
                        td.setAttribute("figure", "");
                        td.setAttribute("color", "");
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
                event.dataTransfer.setData('color', event.currentTarget.getAttribute('color'));
                event.dataTransfer.setData('figure', event.currentTarget.getAttribute('figure'));
            }

            var drop = function (event) {
                let idOld = event.target.id;
                let elementOld = document.getElementById(idOld);
                let itemId = event.dataTransfer.getData('id');
                let color = event.dataTransfer.getData('color');
                let figure = event.dataTransfer.getData('figure');
                let newElement = document.getElementById(itemId);
                let itemClassName = event.dataTransfer.getData('className');

                if (itemClassName == 'Black') {
                    if (event.target.className == 'Black') {
                    } else {
                        event.target.append(document.getElementById(itemId));
                        event.target.setAttribute("color", color);
                        event.target.setAttribute("figure", figure);
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

    showMoves() {
        let element = document.getElementsByTagName('table')[0];
        const tdElements = element.getElementsByTagName('td');
        for (let td of tdElements) {
            td.onmouseover = () => {
                switch (td.getAttribute('Figure')) {
                    case 'Pawn':
                        switch (td.getAttribute('color')) {
                            case 'Black':
                                const xPB = Number(td.dataset.x);
                                const yPB = Number(td.dataset.y);
                                const tdMovePB = document.querySelectorAll(`td[data-y="${yPB}"][data-x="${xPB + 1}"], td[data-y="${yPB}"][data-x="${xPB + 2}"]`);
                                tdMovePB.forEach((td) => { td.style.backgroundColor = "yellow"; });
                                break;
                            case 'White':
                                const xPW = Number(td.dataset.x);
                                const yPW = Number(td.dataset.y);
                                const tdMovePW = document.querySelectorAll(`td[data-y="${yPW}"][data-x="${xPW - 1}"], td[data-y="${yPW}"][data-x="${xPW - 2}"]`);
                                tdMovePW.forEach((td) => { td.style.backgroundColor = "yellow"; });
                                break;
                        }
                        break;
                    case 'Rook':
                        switch (td.getAttribute('color')) {
                            case 'Black':
                                const xRB = Number(td.dataset.x);
                                const yRB = Number(td.dataset.y);
                                const tdMoveRB = document.querySelectorAll(`td[data-y="${yRB}"], td[data-x="${xRB}"] `);
                                tdMoveRB.forEach((td) => { td.style.backgroundColor = "yellow"; });
                                break;
                            case 'White':
                                const xRW = Number(td.dataset.x);
                                const yRW = Number(td.dataset.y);
                                const tdMoveRW = document.querySelectorAll(`td[data-y="${yRW}"], td[data-x="${xRW}"] `);
                                tdMoveRW.forEach((td) => { td.style.backgroundColor = "yellow"; });
                                break;
                        }
                        break;
                    case 'Knight':
                        switch (td.getAttribute('color')) {
                            case 'Black':
                                const xKB = Number(td.dataset.x);
                                const yKB = Number(td.dataset.y);
                                const tdMoveKB = document.querySelectorAll(`td[data-y="${yKB - 1}"][data-x="${xKB + 2}"], td[data-y="${yKB + 1}"][data-x="${xKB + 2}"]`);
                                tdMoveKB.forEach((td) => { td.style.backgroundColor = "yellow"; });
                                break;
                            case 'White':
                                const xKW = Number(td.dataset.x);
                                const yKW = Number(td.dataset.y);
                                const tdMoveKW = document.querySelectorAll(`td[data-y="${yKW + 1}"][data-x="${xKW - 2}"], td[data-y="${yKW - 1}"][data-x="${xKW - 2}"]`);
                                tdMoveKW.forEach((td) => { td.style.backgroundColor = "yellow"; });
                                break;
                        }
                        break;
                    case 'Bishop':
                        switch (td.getAttribute('color')) {
                            case 'Black':
                                const xBB = Number(td.dataset.x);
                                const yBB = Number(td.dataset.y);
                                const tdMoveBB = document.querySelectorAll(`td[data-y="${yBB - 1}"][data-x="${xBB + 1}"], td[data-y="${yBB + 1}"][data-x="${xBB + 1}"], td[data-y="${yBB + 2}"][data-x="${xBB + 2}"], td[data-y="${yBB - 2}"][data-x="${xBB + 2}"], td[data-y="${yBB + 3}"][data-x="${xBB + 3}"], td[data-y="${yBB - 3}"][data-x="${xBB + 3}"], td[data-y="${yBB + 4}"][data-x="${xBB + 4}"], td[data-y="${yBB - 4}"][data-x="${xBB + 4}"], td[data-y="${yBB + 5}"][data-x="${xBB + 5}"], td[data-y="${yBB - 5}"][data-x="${xBB + 5}"]`);
                                tdMoveBB.forEach((td) => { td.style.backgroundColor = "yellow"; });
                                break;
                            case 'White':
                                const xBW = Number(td.dataset.x);
                                const yBW = Number(td.dataset.y);
                                const tdMoveBW = document.querySelectorAll(`td[data-y="${yBW + 1}"][data-x="${xBW - 1}"], td[data-y="${yBW - 1}"][data-x="${xBW - 1}"], td[data-y="${yBW - 2}"][data-x="${xBW - 2}"], td[data-y="${yBW + 2}"][data-x="${xBW - 2}"], td[data-y="${yBW - 3}"][data-x="${xBW - 3}"], td[data-y="${yBW + 3}"][data-x="${xBW - 3}"], td[data-y="${yBW - 4}"][data-x="${xBW - 4}"], td[data-y="${yBW + 4}"][data-x="${xBW - 4}"], td[data-y="${yBW - 5}"][data-x="${xBW - 5}"], td[data-y="${yBW + 5}"][data-x="${xBW - 5}"]`);
                                tdMoveBW.forEach((td) => { td.style.backgroundColor = "yellow"; });
                                break;
                        }
                        break;
                    case 'Quenn':
                        switch (td.getAttribute('color')) {
                            case 'Black':
                                break;
                            case 'White':
                                break;
                        }
                        break;
                    case 'King':
                        switch (td.getAttribute('color')) {
                            case 'Black':
                                break;
                            case 'White':
                                break;
                        }
                        break;
                    case 0:
                        break;
                }
                td.onmouseout = () => {
                    Array.prototype.forEach.call(tdElements, (td) => td.style.backgroundColor = "");
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
