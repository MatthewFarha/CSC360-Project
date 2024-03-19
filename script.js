window.addEventListener("load", loadPage);
var maxMoves = 10; /*Maximum moves flag*/
var moves = new Array(maxMoves)
var buttons = new Array(4)
var currentButton = 0;
/*load page*/
function loadPage(){
    for(i=0; i<4; i++){
        var str = "#mb" + (i+1)
        buttons[i] = document.querySelector(str)
    }
    loadMoves()
}
/*load array of moves*/
function loadMoves(){
    for(i = 0; i<maxMoves; i++){    
        var rn = Math.ceil((Math.random()*4-1))
        if(rn==0)
            rn=1
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