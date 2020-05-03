// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


// Create a listen function
app.listen(PORT, function() {
    console.log(`App is listening at ${PORT}`);
})

// Basic route that sends the user to the index page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

// Basic route that sends the user to the notes page
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});


