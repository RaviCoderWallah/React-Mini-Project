const NotesCard = () => {
  return (
    <div className="notes-card">
      <h2 className="notes-title">Making React Projects</h2>
      <p className="notes-content">
        React is a popular JavaScript library for building user interfaces and single-page applications.
      </p>
      <div className="notes-created-date">2023-03-15</div>
      <div class="notes-tag">
        <div className="category-tag">
          Work
        </div>
        <div className="priority-tag high">
          High
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