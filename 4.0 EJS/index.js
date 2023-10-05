import express from "express";
// we create an app using the express object
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];
  let advice = "It's time to work hard!";

  if (day === "Saturday" || day === "Sunday") {
    advice = "It's time to relax!";
  }

  res.render("index.ejs", { weekday: day, advice: advice });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
