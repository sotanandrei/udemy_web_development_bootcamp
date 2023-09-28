// const set = document.querySelector(".set");

// set.addEventListener("click", handleClick);

// function handleClick() {
//   const isButton = event.target.nodeName === "BUTTON";
//   if (!isButton) {
//     return;
//   }

//   alert("I got clicked.");
// }

// Detecting clicks on buttons
for (var i = 0; i < 7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

// Detecting pressing keys
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// Functions
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log(this.innerHTML);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

// Something else
var housekeeper = {
  name: "Jenny",
  age: 23,
  tasks: ["cleaning", "sucking"],
};

function NewHousekeeper(name, age, tasks) {
  this.name = name;
  this.age = age;
  this.tasks = [tasks];
  this.clean = function () {
    alert("I am cleaning this room.");
  };
}

var housekeeper2 = new NewHousekeeper("Patricia", 21, ["cleaning", "washing"]);
