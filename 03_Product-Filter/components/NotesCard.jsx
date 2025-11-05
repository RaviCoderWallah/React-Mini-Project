const NotesCard = ({ note }) => {
  return (
    <div className="notes-card">
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
        <button className="edit-button">Edit</button>
        <button className="delete-button">Delete</button>
      </div>
    </div>
  )
}

export default NotesCard