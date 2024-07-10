let checkbtn = document.getElementsByClassName("box");
let info = document.getElementById("info");
let newturn = new Audio("ting.mp3");
let gamestart = new Audio("music.mp3");
let gameover = new Audio("gameover.mp3");
const imageContainer = document.querySelector('.image');
const img = document.getElementsByTagName("img")[0];
let isgameover = false;

function checkwin() {
    let winner = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ];

    winner.forEach((e) => {
        if (
            checkbtn[e[0]].innerText === checkbtn[e[1]].innerText &&
            checkbtn[e[1]].innerText === checkbtn[e[2]].innerText &&
            checkbtn[e[0]].innerText !== ""
        ) {
            info.innerText = `Player ${checkbtn[e[0]].innerText} Wins!`;
            imageContainer.classList.add('active');
            img.classList.add('active');
            gameover.play();
            isgameover = true;
        }
    });
}

let turn = "X";
info.innerText = `Turn for ${turn}`; // Set the initial turn display

function checkturn() {
    return turn === "X" ? "O" : "X";
}

function start() {
    imageContainer.classList.remove('active');
    img.classList.remove('active');
    gamestart.volume = 0.2;
    gamestart.play();
    Array.from(checkbtn).forEach((e) => {
        e.addEventListener('click', () => {
            if (e.querySelector(".textbox").innerHTML === "" && !isgameover) { // Ensure the cell is empty and the game is not over
                e.querySelector(".textbox").innerHTML = turn; // Corrected the typo from <divs> to <div>
                newturn.play();
                e.classList.add(turn == "X" ? "box-x" : "box-o");
                checkwin();
                if (!isgameover) {
                    turn = checkturn();
                    info.innerText = `Turn for ${turn}`;
                }
            }
        });
    });

}

function resetGame() {
    imageContainer.classList.remove('active');
    img.classList.remove('active');
    Array.from(checkbtn).forEach((e) => {
        e.querySelector(".textbox").innerHTML = "";
        e.classList.remove("box-x", "box-o");
    });
    turn = "X";
    isgameover = false;
    info.innerText = `Turn for ${turn}`;
}
