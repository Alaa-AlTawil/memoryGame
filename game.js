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
    key.addEventListener("keydown", buttonclick);
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
    key.removeEventListener("keydown", buttonclick);
    yourclick.push(green);
    checker(yourclick);


}

function redFunction() {
    highlight(red);
    key.removeEventListener("keydown", buttonclick);
    red_sound.play();
    yourclick.push(red);
    checker(yourclick);

}
function wrongFunction(){
    wrong_sound.play();
}

function yellowFunction() {
    highlight(yellow);
    key.removeEventListener("keydown", buttonclick);
    yellow_sound.play();
    yourclick.push(yellow);
    checker(yourclick);


}

function blueFunction() {
    highlight(blue);
    key.removeEventListener("keydown", buttonclick);
    blue_sound.play();
    yourclick.push(blue);
    checker(yourclick);

}

function buttonclick() {
    var colors = [green, red, yellow, blue];
    var randindex = Math.floor(Math.random()*colors.length);
    var color = colors[randindex];
    color.click();
    randomm.push(color);

}

function checker(yourclick) {

    if(yourclick.length === randomm.length){
        if (randomm.length === 5) {
            if (randomm[5] === yourclick[5]) {




                green.removeEventListener("click", greenFunction);
                red.removeEventListener("click", redFunction);
                yellow.removeEventListener("click", yellowFunction);
                blue.removeEventListener("click", blueFunction);
                key.addEventListener("keydown", start);
                return;
            
                
            }
        }
        else if (yourclick[yourclick.length-1] !== randomm[yourclick.length-1]) {
            green.removeEventListener("click", greenFunction);
            red.removeEventListener("click", redFunction);
            yellow.removeEventListener("click", yellowFunction);
            blue.removeEventListener("click", blueFunction);
            wrongFunction();
            key.addEventListener("keydown", start);
            return;
            
        }
        
    }


    if (yourclick.length > randomm.length) {
        yourclick.splice(0);

    } else if (yourclick.length < randomm.length) {
        for (var i = 0; i < yourclick.length; i++) {
            if (yourclick[i] !== randomm[i]) {
                green.removeEventListener("click", greenFunction);
                red.removeEventListener("click", redFunction);
                yellow.removeEventListener("click", yellowFunction);
                blue.removeEventListener("click", blueFunction);
                key.addEventListener("keydown", start);
                return;
            } else {

                continue;
            }
        }
    } else {setTimeout(function() {
        
            buttonclick();}, 1000);
        
    }

}
key.addEventListener("keydown",start);