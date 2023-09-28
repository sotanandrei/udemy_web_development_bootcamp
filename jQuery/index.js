$(document).ready(function () {
  // styling, adding/removing classes, changing text
  $("h1").css("color", "blue");
  $("h1").addClass("big-title margin-50");
  $("h1").removeClass("margin-50");
  $("h2").text("I'm fine");
  // .innerHTML --> .html()

  // Shows element's attributes
  console.log($("img").attr("src"));
  // Sets element's attributes
  $("img").attr("src", "fox.png");
  console.log($("img").attr("src"));

  // Adding Event Listeners in jQuery
  $("h1").click(function () {
    alert("Hello!");
  });
  $(document).keypress(function (event) {
    var keyPressed = event.key;
    $("h1").text(keyPressed);
  });

  // There is another way to add Event listeners in jQuery
  $("h2").on("mouseover", function () {
    $("h1").css("color", "red");
  });

  $("#hideButton").click(function () {
    $("h1").hide(); // we can use .show() to show it again or we could have used .toggle()
    // .fadein() or .fadeout()
  });
  // for something more custom we have .animate();
  $("#animButton").click(function () {
    $("h1").animate({ opacity: 0.5 });
    $("h2").slideUp().slideDown().animate({ opacity: 0.5 });
  });
});
