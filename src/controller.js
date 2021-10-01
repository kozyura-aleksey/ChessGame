import Game from "./framework";
import '../dist/style.css';


function startControl() {
    var inception = confirm("Готовы начать игру?");
    if (inception == true) {
        var choise = prompt("Черные или белые?", "Черные");
    }
}

var game = new Game("Chess");
game.draw();



