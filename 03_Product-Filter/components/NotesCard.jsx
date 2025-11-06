const NotesCard = ({ note, id, allNotes, setAllNotes, onEditNote }) => {

  const handleEditNote = (e) => {
    const notesId = e.target.closest(".notes-card").id;
    onEditNote(notesId);
  }

  const handleDeleteNote = (e) => {
    const notesId = e.target.closest(".notes-card").id;
    const updateNotes = allNotes.filter((note) => note.id !== notesId);
    setAllNotes(updateNotes);
  }

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