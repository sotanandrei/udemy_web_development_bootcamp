import axios from "axios";
import express from "express";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "andrei";
const yourPassword = "suavemente";
const yourAPIKey = "64724aa3-3b60-4112-9562-603795285d9a";
const yourBearerToken = "8d15b1e9-cc6d-49c5-b51e-bf84535a5316";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  const response = await axios.get("https://secrets-api.appbrewery.com/random");
  //The data you get back should be sent to the ejs file as "content"
  const content = JSON.stringify(response.data);
  console.log(content);
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  res.render("index.ejs", { content: content });
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  const response = await axios.get(
    "https://secrets-api.appbrewery.com/all?page=2",
    {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    }
  );
  const content = JSON.stringify(response.data);
  res.render("index.ejs", { content: content });
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  const response = await axios.get(
    `https://secrets-api.appbrewery.com/filter`,
    {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    }
  );
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  const content = JSON.stringify(response.data);
  res.render("index.ejs", { content: content });
});

const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};
app.get("/bearerToken", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/secrets/42", config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
