import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onEdit, onDelete, onFavorite }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
          onFavorite={onFavorite}
        />
      ))}
    </div>
  );
};

export default NoteList;