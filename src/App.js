// src/App.js
import React, { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css';

const initialNotes = [
  { id: 1, title: 'Первая заметка', content: 'Это содержание первой заметки.', isFavorite: false },
  { id: 2, title: 'Вторая заметка', content: 'Это содержание второй заметки.', isFavorite: false },
];

const App = () => {
  const [notes, setNotes] = useState(initialNotes);
  const [editingNote, setEditingNote] = useState(null);

  const addNote = (newNote) => {
    setNotes([...notes, { ...newNote, id: notes.length + 1, isFavorite: false }]);
  };

  const editNote = (updatedNote) => {
    setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
    setEditingNote(null);
  };

  const deleteNote = (noteToDelete) => {
    setNotes(notes.filter((note) => note.id !== noteToDelete.id));
  };

  const toggleFavorite = (note) => {
    setNotes(notes.map((n) => (n.id === note.id ? { ...n, isFavorite: !n.isFavorite } : n)));
  };

  return (
    <div className="app">
      <h1>ЗаметОчка</h1>
      <NoteForm
        onSubmit={editingNote ? editNote : addNote}
        initialNote={editingNote}
      />
      <NoteList
        notes={notes}
        onEdit={(note) => setEditingNote(note)}
        onDelete={deleteNote}
        onFavorite={toggleFavorite}
      />
    </div>
  );
};

export default App;