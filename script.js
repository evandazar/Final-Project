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

let squareGet = document.getElementById("game-square");

let currentGame = ["", "", "", "", "", "", "", "", ""];

let GameOn = true;

const winMessage = () => currentPlayer + " has won";

const catsGame = () => "Cats Game";

//const squareId = (square) => Number.parseInt(square.id.replace("square-", ""));


function handleClick(clickedSquareEvent)
{
    const squareClicked = clickedSquareEvent.target;
    squareClicked.innerText = currentPlayer;
    const squareClickedId = Number.parseInt(
    squareClicked.id.replace("square-", "")
    );
    if (currentGame[squareClickedId] != "" || !GameOn)
    {
        return;
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

document.querySelectorAll('.game-square').forEach(square => square.addEventListener('click', handleClick));

//const listenersEnabled = () => grid().forEach(square => square.addEventListener("click", handleClick));

//const grid = () => Array.from(document.getElementsByClassName("game-square"));

//document.querySelectorAll("game-square").forEach(square => square.addEventListener("click", handleClick));

/*
const listenersDisabled = () => grid().forEach(square => square.removeEventListener("click", clickFun));

const olistenersEnabled = () => grid().forEach(square => square.addEventListener("click", clickFunO));
const olistenersDisabled = () => grid().forEach(square => square.removeEventListener("click", clickFunO));



const emptySquare = () => grid().filter(square => square.innerText == "");

const sameCheck = (arr) => arr.every(square => square.innerText == arr[0].innerText && square.innerText != "");

const yourMove = (index, letter) => grid()[index].innerText = letter;


const clickFun = (event) => {
    listenersEnabled();
    olistenersDisabled();
    console.log(event.target.id);
    console.log(event.target.innerText);
    if (event.target.innerText == 'x' || 'o')
    {
    //listenersDisabled();
    yourMove(squareId(event.target), "x");
    }
    else
    {
        //yourMove(squareId(event.target), "x");
        listenersDisabled();
    }
    //clickFunO();
}

const clickFunO = (event) => {
    olistenersEnabled();
    listenersDisabled();
    console.log(event.target.id);
    //yourMove(squareId(event.target), "o");
    if (event.target.innerText = 'x' || 'o')
    {
    olistenersDisabled();
    //yourMove(squareId(event.target), "x");
    }
    else
    {
        yourMove(squareId(event.target), "o");
    }
    clickFun();
}*/



//listenersEnabled();

/*


*/