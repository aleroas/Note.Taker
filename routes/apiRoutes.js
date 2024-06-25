const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const router = require('express').Router();

// GET /api/notes - Retrieve all notes
router.get('/api/notes', (req, res) => {
  fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

// POST /api/notes - Save a new note
router.post('/api/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4();
  fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    notes.push(newNote);
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), 'utf8', (err) => {
      if (err) throw err;
      res.json(newNote);
    });
  });
});

// DELETE /api/notes/:id - Delete a note by id
router.delete('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;
  fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
    if (err) throw err;
    let notes = JSON.parse(data);
    notes = notes.filter(note => note.id !== noteId);
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), 'utf8', (err) => {
      if (err) throw err;
      res.sendStatus(204);
    });
  });
});

module.exports = router;
