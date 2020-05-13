// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

const router = require("./routes/api");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use(router);

// Functions to load the pages
app.get("/", function(req, res) {
    let html = fs.readFileSync(__dirname + "/public/index.html", "utf-8");
    res.send(html);
});

app.get("/notes", function(req, res) {
    res.sendFile(__dirname + "/public/notes.html");
});

// Create a listen function
app.listen(PORT, function () {
    console.log(`App is listening at ${PORT}`);
});
