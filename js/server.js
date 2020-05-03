// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets up the Express App
const app = express();
const port = 3000;


// Create a listen function
app.listen(port, function() {
    console.log(`App is listening at ${port}`);
})

// Basic route that sends the user to the index page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
});

// Basic route that sends the user to the notes page
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../notes.html"));
});


