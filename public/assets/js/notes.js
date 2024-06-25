document.addEventListener('DOMContentLoaded', () => {
    const noteList = document.getElementById('note-list');
    const noteTitle = document.getElementById('note-title');
    const noteText = document.getElementById('note-text');
    const saveNoteBtn = document.getElementById('save-note');
    const clearNoteBtn = document.getElementById('clear-note');
  
    // Function to fetch and display notes
    const getNotes = async () => {
      const response = await fetch('/api/notes');
      const notes = await response.json();
      noteList.innerHTML = '';
      notes.forEach(note => {
        const li = document.createElement('li');
        li.textContent = note.title;
        li.dataset.id = note.id;
        li.addEventListener('click', () => {
          noteTitle.value = note.title;
          noteText.value = note.text;
        });
        noteList.appendChild(li);
      });
    };
  
    // Function to save a new note
    const saveNote = async () => {
      const newNote = {
        title: noteTitle.value,
        text: noteText.value,
      };
      await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNote),
      });
      getNotes();
      noteTitle.value = '';
      noteText.value = '';
    };
  
    // Event listeners
    saveNoteBtn.addEventListener('click', saveNote);
    clearNoteBtn.addEventListener('click', () => {
      noteTitle.value = '';
      noteText.value = '';
    });
  
    // Initial call to populate notes
    getNotes();
  });
  