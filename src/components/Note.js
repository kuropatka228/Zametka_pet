// src/components/Note.js
import React from 'react';

const Note = ({ note, onEdit, onDelete, onFavorite }) => {
  return (
    <div className={`note ${note.isFavorite ? 'favorite' : ''}`}>
      <h3>{note.title.substring(0, 20)}</h3>
      <p>{note.content}</p>
      <div className="actions">
        <button onClick={() => onEdit(note)}>Редактировать</button>
        <button onClick={() => onDelete(note)}>Удалить</button>
        <button className="toggle-favorite" onClick={() => onFavorite(note)}>
          {note.isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
        </button>
      </div>
    </div>
  );
};

export default Note;