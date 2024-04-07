//--------------------------------------------------- Variables
var username;
var numberofmoves;
var numberofbuttons;
var buttons;
var fakeButtons;
var moves;
var memoryContainer;
var fakeMemoryContainer;
var baseColors = ["#003b5c", "#e641b6", "#3ea908", "#0057e5", "#f0cc2e", "#e50000", "#41b6e6", "#ec894d"];
var deutColors = [];
var protColors = [];
var colorMode = 0;
var blindModeMenuOpen = false;
var internalMoveCounter = 0;
var moveCounter = 1; // Counter for move
var moveTicker = 0; //Ticker for current move, two seperate variables with logical implications
var score = 1;
//--------------------------------------------------- Load Page before accessing elements
window.addEventListener("load", loadPage);
function loadPage(){
    username = document.querySelector('#username').innerHTML;
    numberofmoves = parseInt(document.querySelector('#numberofmoves').innerHTML);
    numberofbuttons = parseInt(document.querySelector('#numberofbuttons').innerHTML);
    buttons = document.querySelectorAll(".gameButton");
    memoryContainer = document.querySelector('#memoryButtons');
    fakeButtons = document.querySelectorAll(".fakeButton");
    fakeMemoryContainer = document.querySelector('#fakeMemoryButtons');
    moves = Array(buttons);
    roundDisplay = document.querySelector("#round");
    loadGame();
}
//--------------------------------------------------- Game Logic
function loadGame(){
    setColor(0);
    loadMoves(numberofmoves);
    console.log(moves);
    displayMoves();
}
function loadMoves(x){
    for(let i=0; i<x; i++){
        let r = Math.floor(numberofbuttons*Math.random());
        if(r==numberofbuttons){
            r--;
        }
        moves[i] = r;
    }
}
function playerMove(x){
    if(internalMoveCounter<=moveCounter){
        if(x==moves[internalMoveCounter++]){
        }
        else{
            lose();
        }
    }
    if(internalMoveCounter==moveCounter){
        nextRound();
    }
}
function nextRound(){
    if(moveCounter<numberofmoves){
        roundDisplay.innerHTML = moveCounter;
        internalMoveCounter=0;
        moveTicker=0;
        moveCounter++;
        console.log("Round "+moveCounter);
        displayMoves();
    }
    else{
        win();
    }
}
function displayMoves(){
    fakeMemoryContainer.style.display = "flex";
    memoryContainer.style.display = "none";
    lightSequence();
}
function lightSequence(){
    if(moveTicker<numberofmoves){
        let currm = moves[moveTicker];
        let currn = currm;
        if(moveTicker>0){
            currn = moves[moveTicker-1];
            fakeButtons[currn].style.background = baseColors[currn];
        }
        if(moveTicker<moveCounter)
        {
            fakeButtons[currm].style.background = "#FFFFFF";
        }
    }
    if(moveTicker<=moveCounter){
        setTimeout(function(){lightSequence();}, 1000);
    }
    if(moveTicker==moveCounter){
        fakeMemoryContainer.style.display = "none";
        memoryContainer.style.display = "flex";
        score++;
    }
    moveTicker++;
}
function win(){
    window.sessionStorage.setItem("lose", false);
    window.sessionStorage.setItem("score", score);
    window.location.replace("leaderboard.php");
}
function lose(){
    window.sessionStorage.setItem("lose", true);
    window.sessionStorage.setItem("score", score);
    window.location.replace("leaderboard.php");
}

// TO DO: BLIND MODE

//--------------------------------------------------- Blind Mode Logic
function setColor(x){
    switch(x){
        case 1:
            for(let i=0; i<buttons.length; i++){
                buttons[i].style.background = deutColors[i];
                fakeButtons[i].style.background = deutColors[i];
            }
            break;
        case 2:
            for(let i=0; i<buttons.length; i++){
                buttons[i].style.background = protColors[i];
                fakeButtons[i].style.background = protColors[i];
            }
            break;
        default:
            for(let i=0; i<buttons.length; i++){
                buttons[i].style.background = baseColors[i];
                fakeButtons[i].style.background = baseColors[i];

            }
    }
}
function blindModeMenu(){
/*    let button = document.querySelector('#blind-mode-button');
    let menu = document.querySelector('#blind-mode-menu');
    console.log(blindModeMenuOpen);
    if(blindModeMenuOpen){
        blindModeMenuOpen = true;
        console.log(blindModeMenuOpen);
        menu.style.visible = "visible";
        button('#blind-mode-button').style.background = "#777777";
    }
    else{
        blindModeMenuOpen = false;
        console.log(blindModeMenuOpen);
        menu.style.visibility = "hidden";
        button.style.background = "#FFFFFF";
    }*/
}
