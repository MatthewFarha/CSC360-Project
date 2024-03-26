window.addEventListener("load", loadPage); // Wait for page to load to start setting elements
var maxMoves = 10; /*Maximum moves flag*/
var moves = new Array(maxMoves)
var buttons = new Array(4)
var currentButton = 0;
var currentSize = 0;
var blind = false;
var colors = new Array(4)
/*load page*/
function loadPage(){
    for(i=1; i<5; i++){
        var str = "#mb" + (i)
        buttons[i-1] = document.querySelector(str)
        colors[i-1] = window.getComputedStyle(buttons[i-1], null).getPropertyValue('background-color')
    }
    loadMoves()
}
/*load array of moves*/
function loadMoves(){
    for(i = 0; i<maxMoves; i++){    
        var rn = Math.ceil((Math.random()*4))-1
        moves[i] = buttons[rn]
        console.log(moves[i].innerHTML)
    }
}
/*onclick function that pushes currentButton forward if correct or restart (reload page)*/
function memButtonClick(x){
    if(buttons[x] == moves[currentButton]){
        currentButton++
        console.log("Correct!")
    }
    else
        location.reload()
}
function blindMode(){
    if(blind){
        for(i=0; i<4;i++){
            buttons[i].style.backgroundColor = colors[i]
            buttons[i].style.color = "#000000"
        }
        blind = false
    }
    else{
        for(i=0; i<4;i++){
            buttons[i].style.backgroundColor = "#555555"
            buttons[i].style.color = "#FFFFFF"
        }
        blind = true
    }
}