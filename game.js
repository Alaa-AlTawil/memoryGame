var blue_sound = new Audio("sounds/sounds/blue.mp3");
var wrong_sound = new Audio("sounds/sounds/wrong.mp3");
var green_sound = new Audio("sounds/sounds/green.mp3");
var red_sound = new Audio("sounds/sounds/red.mp3");
var yellow_sound = new Audio("sounds/sounds/yellow.mp3");
var green = document.getElementById("g1");
var red = document.getElementById("r1");
var yellow = document.getElementById("y1");
var blue = document.getElementById("b1");
var key = document.getElementById("body");

function start() {
    yourclick = [];
    randomm=[];
    green.addEventListener("click", greenFunction);
    red.addEventListener("click", redFunction);
    yellow.addEventListener("click", yellowFunction);
    blue.addEventListener("click", blueFunction);

}



function highlight(button) {
    var orig = button.style.border;
    button.style.border = ' white';
    setTimeout(function () {
        button.style.border = orig;
    }, 70);

}


function greenFunction() {
    highlight(green);
    green_sound.play();
    
    


}

function redFunction() {
    highlight(red);
    red_sound.play();

}
function wrongFunction(){
    wrong_sound.play();
}

function yellowFunction() {
    highlight(yellow);
    yellow_sound.play();




}

function blueFunction() {
    highlight(blue);
    blue_sound.play();

}

function buttonclick() {
    var colors = [green, red, yellow, blue];
    var randindex = Math.floor(Math.random()*colors.length);
    var color = colors[randindex];
    color.click();
    randomm.push(color);
}


key.addEventListener("keydown",start);