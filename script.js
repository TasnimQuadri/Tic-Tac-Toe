const cell = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartButton = document.querySelector("#restartButton");
const winsCondition = [
    [0 , 1 , 2],
    [3 , 4 , 5],
    [6 , 7 , 8],
    [0 , 3 , 6],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [0 , 4 , 8],
    [2 , 4 , 6],
];
let options = ["" , "" , "" , "" , "" , "" , "" , "" , ""];
let currentPlayer = "X";
let running = false;

initializeGame();

// The addEventListener() method attaches an event handler to the specified element. heer click is the event and cellclicked is the function.

function initializeGame(){
cell.forEach( cell=> cell.addEventListener( "click" , cellClicked));
restartButton.addEventListener("click" , restartGame);
statusText.textContent = `${currentPlayer},s Turn`;
running = true;
}
function cellClicked(){
const cellIndex = this.getAttribute("cellIndex");
if(options[cellIndex] != "" || !running){
return;
}
cellUpdate(this , cellIndex);
checkWinner();
}
function cellUpdate(cell , index){
options[index] = currentPlayer;
cell.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s Turn`;
}
function  checkWinner(){
let roundWon = false;
for( i = 0 ; i < winsCondition.length; i++){
    const condition = winsCondition[i];
   const cellA = options[condition[0]];
   const cellB = options[condition[1]];
   const cellC = options[condition[2]];
if( cellA == "" || cellB == "" || cellC == "" ){
continue;
}
if( cellA == cellB && cellB == cellC){
    roundWon = true;
    break;
}


}
if(roundWon){
    statusText.textContent = `${currentPlayer}'s WIns`;
    running= false;
}
else if(!options.includes("")){
    statusText.textContent = `Draw!`;
    running = false;
}
else{
    changePlayer();
}
}

function restartGame(){
currentPlayer = "X";
options = ["" , "" , "" , "" , "" , "" , "" , "" , ""];
statusText.textContent = `${currentPlayer},s Turn`;
cell.forEach(cell => cell.textContent= "");
running = true;
}