// const set = document.querySelector(".set");

// set.addEventListener("click", handleClick);

// function handleClick() {
//   const isButton = event.target.nodeName === "BUTTON";
//   if (!isButton) {
//     return;
//   }

//   alert("I got clicked.");
// }

for (var i = 0; i < 7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
  alert("I got clicked.");
}
