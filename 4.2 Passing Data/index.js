import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  let firstName = req.body["fName"];
  let lastName = req.body["lName"];
  let sum = firstName.length + lastName.length;

  res.render("index.ejs", { sum: sum });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
