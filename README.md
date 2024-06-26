
# Note Taker

## Deployment

The application is deployed on Render. You can access it [here](https://note-taker-1-36ib.onrender.com).

## Description

The Note Taker application allows users to write, save, and delete notes. It uses an Express.js back end to store and retrieve note data from a JSON file.

## User Story

```md
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears

## Installation
git clone https://github.com/your-username/NoteTaker.git
cd NoteTaker
npm install

## Usage
node server.js

## Features
Write, save, and delete notes.
Notes are saved to a JSON file on the server.

## API Routes
GET /api/notes: Reads the db.json file and returns all saved notes as JSON.
POST /api/notes: Receives a new note to save on the request body, adds it to the db.json file, and returns the new note to the client.
DELETE /api/notes/:id: Deletes the note with the given id from the db.json file.

## License
This project is licensed under the MIT License.

