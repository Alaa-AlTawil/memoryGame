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
var txt = document.getElementById("titletxt");

function start() {
  yourclick = [];
  randomm = [];
  key.removeEventListener("keydown", start);
  key.addEventListener("keydown", buttonclick);
  green.addEventListener("click", greenFunction);
  red.addEventListener("click", redFunction);
  yellow.addEventListener("click", yellowFunction);
  blue.addEventListener("click", blueFunction);


}



function highlight(button) {
  var orig = button.style.border;
  button.style.border = " white";
  setTimeout(function () {
    button.style.border = orig;
  }, 70);
}

function greenFunction() {
  document.querySelectorAll(".hole-div").forEach((item) => {
    item.classList.remove("youlose");
  });
  document.querySelectorAll(".body12").forEach((item) => {
    item.classList.remove("youlose");
  });
  highlight(green);
  green_sound.play();
  key.removeEventListener("keydown", buttonclick);
  yourclick.push(green);
  checker(yourclick);
}

function redFunction() {
  document.querySelectorAll(".hole-div").forEach((item) => {
    item.classList.remove("youlose");
  });
  document.querySelectorAll(".body12").forEach((item) => {
    item.classList.remove("youlose");
  });
  highlight(red);
  key.removeEventListener("keydown", buttonclick);
  red_sound.play();
  yourclick.push(red);
  checker(yourclick);
}

function wrongFunction() {
  wrong_sound.play();
}

function yellowFunction() {
  document.querySelectorAll(".hole-div").forEach((item) => {
    item.classList.remove("youlose");
  });
  document.querySelectorAll(".body12").forEach((item) => {
    item.classList.remove("youlose");
  });
  highlight(yellow);
  key.removeEventListener("keydown", buttonclick);
  yellow_sound.play();
  yourclick.push(yellow);
  checker(yourclick);
}

function blueFunction() {
  document.querySelectorAll(".hole-div").forEach((item) => {
    item.classList.remove("youlose");
  });
  document.querySelectorAll(".body12").forEach((item) => {
    item.classList.remove("youlose");
  });
  highlight(blue);
  key.removeEventListener("keydown", buttonclick);
  blue_sound.play();
  yourclick.push(blue);
  checker(yourclick);
}

function buttonclick() {
  var colors = [green, red, yellow, blue];
  var randindex = Math.floor(Math.random() * colors.length);
  var color = colors[randindex];
  color.click();
  randomm.push(color);
  txt.innerHTML = "level " + randomm.length;
  key.removeEventListener("keydown", buttonclick);
}

function checker(yourclick) {
  if (yourclick.length === randomm.length) {
    if (randomm.length === 10) {
        if(randomm[10] != yourclick[10]){
            txt.innerHTML = "Game over, press twice on any key to restart";
            green.removeEventListener("click", greenFunction);
            red.removeEventListener("click", redFunction);
            yellow.removeEventListener("click", yellowFunction);
            blue.removeEventListener("click", blueFunction);
            document.querySelectorAll(".hole-div").forEach((item) => {
              item.classList.add("youlose");
            });
            document.querySelectorAll(".body12").forEach((item) => {
              item.classList.add("youlose");
            });
            wrongFunction();
            key.addEventListener("keydown", start);
            return;
          }
        if (randomm[10] == yourclick[10]) {
        txt.innerHTML ="Winner you reach final level \n if you need to play another time, keydown twice";
        green.removeEventListener("click", greenFunction);
        red.removeEventListener("click", redFunction);
        yellow.removeEventListener("click", yellowFunction);
        blue.removeEventListener("click", blueFunction);
        key.addEventListener("keydown", start);
        return;
      }
      
    } 
    else if ( yourclick[yourclick.length - 1] !== randomm[yourclick.length - 1]) {
      txt.innerHTML = "Game over, press twice on any key to restart";
      green.removeEventListener("click", greenFunction);
      red.removeEventListener("click", redFunction);
      yellow.removeEventListener("click", yellowFunction);
      blue.removeEventListener("click", blueFunction);
      document.querySelectorAll(".hole-div").forEach((item) => {
        item.classList.add("youlose");
      });
      document.querySelectorAll(".body12").forEach((item) => {
        item.classList.add("youlose");
      });
      wrongFunction();
      key.addEventListener("keydown", start);
      return;
    }
  }

  if (yourclick.length > randomm.length) {
    yourclick.splice(0);
  }
    else if (yourclick.length < randomm.length) {
        for (var i = 0; i < yourclick.length; i++) {
            if (yourclick[i] !== randomm[i]) {
                txt.innerHTML = "Game over, press twice on any key to restart";
                green.removeEventListener("click", greenFunction);
                red.removeEventListener("click", redFunction);
                yellow.removeEventListener("click", yellowFunction);
                blue.removeEventListener("click", blueFunction);
                document.querySelectorAll(".hole-div").forEach((item) => {
                item.classList.add("youlose");
                });
                document.querySelectorAll(".body12").forEach((item) => {
                item.classList.add("youlose");
                });
                wrongFunction();
                key.addEventListener("keydown", start);
                return;
            } else {
                continue;
            }
            }
  } 
  else {
    setTimeout(function () {
      buttonclick();
    }, 1000);
  }
}
key.addEventListener("keydown",start);
