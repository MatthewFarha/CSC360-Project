window.addEventListener("load", loadPage);
var moves = new Array()
var buttons = new Array(4);
function loadPage(){
    for(i=0; i<4; i++){
        var str = "#mb" + (i+1)
        buttons[i] = document.querySelector(str)
        buttons[i].addEventListener("click", memButtonClick)
        buttons[i].myParam = i;
    }
}
function newMove(){
    var rn = Math.ceil((math.random()*4-1))
    if(rn==0)
        rn=1
    moves[currentMove] = buttons[rn]
}
function memButtonClick(evt){
    console.log(evt.currentTarget.myParam)
}
function checkButtonComp(){
    
}