// 1. Import express and axios
import axios from "axios";
import bodyParser from "body-parser";
import express from "express";

// 2. Create an express app and set the port number.
const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// 3. Use the public folder for static files.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// 4. When the user goes to the home page it should render the index.ejs file.

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "/random");
    const result = response.data;
    console.log(result);
    res.render("index.ejs", {
      secret: result.secret,
      user: result.username,
    });
  } catch (error) {
    console.log(error.response.data);
    res.status(500).send("Internal Server Error");
  }
});

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
