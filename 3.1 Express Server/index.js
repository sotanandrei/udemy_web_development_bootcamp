import express from "express";
// we create an app using the express object
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(req.rawHeaders);
  res.send("Hello world! My name is Andrei");
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
