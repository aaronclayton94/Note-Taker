const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const dbPath = __dirname + "/../db/db.json";

function readExistingNotes() {
  return JSON.parse(fs.readFileSync(dbPath));
}

router.get("/api/notes", function (req, res) {
  let notes = readExistingNotes();

  res.json(notes);
});

router.post("/api/notes", function (req, res) {
  let notePosted = req.body;
  notePosted.id = uuidv4();
  let notes = readExistingNotes();
  notes.push(notePosted);
  fs.writeFileSync(dbPath, JSON.stringify(notes));
});

router.delete("/api/notes/:id", function (req, res) {
  let toDelete = req.params.id;
  let notes = readExistingNotes();
  let filtered = notes.delete((note) => note !== toDelete);
  fs.writeFileSync(dbPath, JSON.stringify(filtered));
});

module.exports = router;
