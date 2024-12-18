import React, { useState, useEffect } from 'react';

const NoteForm = ({ onSubmit, initialNote }) => {
  const [note, setNote] = useState({ title: '', content: '' });

  useEffect(() => {
    if (initialNote) {
      setNote({ ...initialNote });
    }
  }, [initialNote]);

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(note);
    setNote({ title: '', content: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={note.title}
        onChange={handleChange}
        placeholder="Название"
        required
      />
      <textarea
        name="content"
        value={note.content}
        onChange={handleChange}
        placeholder="Содержание"
        required
      ></textarea>
      <button type="submit">{initialNote ? 'Обновить' : 'Создать'}</button>
    </form>
  );
};

export default NoteForm;