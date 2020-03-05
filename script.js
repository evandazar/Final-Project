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

document.querySelectorAll('.game-square').forEach(square => square.addEventListener('click', handleClick));

function handleClick(clickedSquareEvent)
{
    const squareClicked = clickedSquareEvent.target;
    const squareClickedId = parseInt(
    squareClicked.getAttribute("id")
    );
    console.log(clickedSquareEvent.target);
}


/*const grid = () => Array.from(document.getElementsByClassName("game-square"));
const clickFun = (event) => console.log(event.target);

const listenersEnabled = () => grid().forEach(gsEl => gsEl.addEventListener("click", clickFun));
const listenersDisabled = () => grid().forEach(gsEl => gsEl.removeEventListener("click", clickFun));

listenersEnabled();*/