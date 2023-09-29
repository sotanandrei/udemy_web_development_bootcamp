// Variables
const buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var playing = false;
let level = 0;
let count = 0;

// Starting the game
$(document).keypress(function () {
  if (playing === false) {
    playing = true;
    $("h1").text("Level 0");
    nextSequence();
  }
});

// Detecting clicks on buttons
$(".btn").click(function () {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playSound(userChosenColour);

  // The game
  if (userClickedPattern.length < gamePattern.length) {
    count += 1;

    // Verify if what user clicked is the same as game pattern;
    if (
      JSON.stringify(gamePattern.slice(0, count)) !==
      JSON.stringify(userClickedPattern)
    ) {
      // if wrong then end game
      startOver();
    }
  } else {
    if (JSON.stringify(gamePattern) !== JSON.stringify(userClickedPattern)) {
      // if wrong then end game
      startOver();
    } else {
      level += 1;
      userClickedPattern = [];
      count = 0;
      setTimeout(nextSequence, 1000);
    }
  }
});

// functions
function nextSequence() {
  var randomNumber = Math.round(Math.random() * 3);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("h1").text(`Level ${level}`);
  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio(`./sounds/${name}.mp3`);
  audio.play();
}

function animatePress(currentColour) {
  $(`#${currentColour}`).addClass("pressed");
  setTimeout(function () {
    $(`#${currentColour}`).removeClass("pressed");
  }, 200);
}

function startOver() {
  level = 0;
  playing = false;
  userClickedPattern = [];
  gamePattern = [];
  playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);
  $("h1").text("Game over! Press any key to restart!");
}
