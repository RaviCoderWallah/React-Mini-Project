const LeftSideBar = () => {
  return (
    <div className="left-sidebar">
      <h1>Create a New Note</h1>
      <form>
        <div className="left-sidebar-controls">
          <div>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description"></textarea>
          </div>
          <div>
            <label htmlFor="category">Category:</label>
            <select name="category" id="category">
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="shopping">Ideas</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="priority">Priority:</label>
            <select name="priority" id="priority">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <button type="submit">Save Note</button>
      </form>
    </div>
  )
}

export default LeftSideBar