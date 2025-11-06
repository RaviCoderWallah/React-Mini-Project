const NotesCard = ({ note, id, allNotes, setAllNotes, onEditNote }) => {

  const handleEditNote = () => {
    // use the id prop directly instead of DOM traversal
    if (onEditNote) onEditNote(id);
  };

  const handleDeleteNote = () => {
    // filter out the current note using the id prop
    const updateNotes = allNotes.filter((note) => note.id !== id);
    setAllNotes(updateNotes);
  };

  return (
    <div className="notes-card" id={id}>
      <h2 className="notes-title">{note.title}</h2>
      <p className="notes-content">{note.description}</p>
      <div className="notes-created-date">{note.dateCreateAt}</div>
      <div className="notes-tag">
        <div className="category-tag">
          {note.category}
        </div>
        <div className={`priority-tag ${note.priority}`}>
          {note.priority}
        </div>
      </div>
      <div className="notes-footer">
        <button className="edit-button" onClick={handleEditNote}>Edit</button>
        <button className="delete-button" onClick={handleDeleteNote}>Delete</button>
      </div>
    </div>
  )
}

export default NotesCard