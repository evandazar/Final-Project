const winSets = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];
let currentPlayer = "X";

let getScoreX = document.getElementById("scoreboard-x");

let getScoreO = document.getElementById("scoreboard-o");

let squareGet = document.getElementById("game-square");

let restartGet = document.getElementById("button-play-again");

let winnerGet = document.getElementById("winner");

let currentGame = ["", "", "", "", "", "", "", "", ""];

let scoreX = localStorage.getItem("scoreX");

let scoreO =  localStorage.getItem("scoreO");

let GameOn = true;

const winMessage = () => currentPlayer + " has won";

const catsGame = () => "Cats Game";

restartGet.addEventListener("click", defaultState);

updateScoreboard();

document.querySelectorAll(".game-square").forEach(square => square.addEventListener("click", handleClick));

function defaultState()
{
    console.log("button has been clicked")
    currentGame = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll(".game-square").forEach(square => square.innerText = "");
    document.querySelectorAll(".game-square").forEach(square => square.addEventListener("click", handleClick));
    currentPlayer = "X";
    winnerGet.innerText = "";
    GameOn = true;
}

function handleWinCon() {
    let playerWon = false;
    for (let i = 0; i <= winSets.length-1; i++)
    {
        const winCon = winSets[i];
        let win1 = currentGame[winCon[0]];
        let win2 = currentGame[winCon[1]];
        let win3 = currentGame[winCon[2]];
        if (win1 == "" || win2 == "" || win3 == "")
        {
            continue;
        }
        if (win1 == win2 && win2 == win3)
        {
            playerWon = true;
            break;
        }
    }
    if (playerWon)
    {
        console.log(currentPlayer + " has won")
        winnerGet.innerText = currentPlayer;
        GameOn = false;
        document.querySelectorAll(".game-square").forEach(square => square.removeEventListener("click", handleClick));
        if (currentPlayer == "X")
        {
            if (localStorage.getItem("scoreX")== null)
            {
                localStorage.setItem("scoreX", 1);
            }
            else
            {
                let currentScoreX = parseInt(localStorage.getItem("scoreX"));
                currentScoreX++;
                localStorage.setItem("scoreX", currentScoreX);
            }
        console.log(getScoreX.innerText);
        }
        else 
        {
            if (localStorage.getItem("scoreO")== null)
            {
                localStorage.setItem("scoreO", 1);
            }
            else
            {
                let currentScoreO = parseInt(localStorage.getItem("scoreO"));
                currentScoreO++;
                localStorage.setItem("scoreO", currentScoreO);
            }
            console.log(getScoreO.innerText);

        } 
        updateScoreboard();
    }
    let drawGame = !currentGame.includes("");
    if (drawGame)
    {
        GameOn = false;
        winnerGet.innerText = "Cats Game!"
        document.querySelectorAll(".game-square").forEach(square => square.removeEventListener("click", handleClick));
        return;
    }
    handlePlayerSwitch();
}

function handleClick(clickedSquareEvent)
{
    const squareClicked = clickedSquareEvent.target;
    squareClicked.innerText = currentPlayer;
    const squareClickedId = Number.parseInt(
    squareClicked.id.replace("square-", "")
    );
    if (squareClicked.innerText != "")
    {
        squareClicked.removeEventListener("click", handleClick);
    } 
    console.log(squareClickedId);
    handleCurrentPlayer(squareClicked, squareClickedId);
    handleWinCon();
}
function handleCurrentPlayer(squareClicked, squareClickedId)
{
    currentGame[squareClickedId] = currentPlayer;
}
function handlePlayerSwitch()
{
    currentPlayer = currentPlayer == "X" ? "O" : "X";
}

function updateScoreboard()
{
    if (localStorage.getItem("scoreX") != null)
    {
        getScoreX.innerText = localStorage.getItem("scoreX");
    }
    if (localStorage.getItem("scoreO") != null)
    {
        getScoreO.innerText = localStorage.getItem("scoreO");
    }
}


