const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;  //default port 8080

app.set("view engine", "ejs");

const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

app.get("/urls.json", (req, res) => {
  res.json(urlDatabase);
});

app.get("/hello", (req, res) => {
  res.send("<html><body>Hello <b>World</b></body></html>\n");
});

// displays the list of URLs and their shortened forms
app.get("/urls", (req, res) => {
  let templateVars = { urls: urlDatabase };
  res.render("urls_index", templateVars);
});

// displays a single URL and its shortened form
app.get("/urls/:id", (req, res) => {
  let templateVars = {
                        urls: urlDatabase,
                        shortURL: req.params.id
                      };
  res.render("urls_show", templateVars);
});

// adds body-parser to express_server
app.use(bodyParser.urlencoded({extended: true}));