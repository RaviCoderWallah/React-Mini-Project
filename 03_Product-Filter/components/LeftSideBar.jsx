import { useEffect, useState } from "react";

const LeftSideBar = ({ allNotes, setAllNotes, setFilteredNotes, updateNote }) => {
  const [formData, setFormData] = useState({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    category: "",
    priority: "",
    dateCreateAt: new Date().toLocaleDateString('en-GB').replace(/\//g, '-')
  });

  const [trackTitleLength, setTrackTitleLength] = useState(0);
  const [trackDescriptionLength, setTrackDescriptionLength] = useState(0);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (name === "title") setTrackTitleLength(value.length);
    if (name === "description") setTrackDescriptionLength(value.length);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    let updatedNotes;
    if (updateNote) {
      // Update existing note
      updatedNotes = allNotes.map((note) =>
        note.id === formData.id ? formData : note
      );
    } else {
      // Add new note
      updatedNotes = [...allNotes, formData];
    }

    setAllNotes(updatedNotes);
    setFilteredNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));


    // Reset form for next note
    setFormData({
      id: crypto.randomUUID(),
      title: "",
      description: "",
      category: "",
      priority: "",
      dateCreateAt: new Date().toLocaleDateString('en-GB').replace(/\//g, '-')
    });
    setTrackTitleLength(0);
    setTrackDescriptionLength(0);
  };

  // Load note when editing
  useEffect(() => {
    if (!updateNote) return;

    const notesFromStorage = JSON.parse(localStorage.getItem("notes")) || [];
    const noteToEdit = notesFromStorage.find((note) => note.id === updateNote);

    if (noteToEdit) {
      setFormData(noteToEdit);
      setTrackTitleLength(noteToEdit.title.length);
      setTrackDescriptionLength(noteToEdit.description.length);
    }
  }, [updateNote]);

  return (
    <div className="left-sidebar">
      <h1>{updateNote ? "Update Note" : "Add Note"}</h1>
      <form onSubmit={handleSubmit}>
        <div className="left-sidebar-controls">
          <div>
            <div className="input-label">
              <label htmlFor="title">Title:</label>
              <span>{trackTitleLength} / 100</span>
            </div>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              spellCheck="false"
            />
          </div>

          <div>
            <div className="input-label">
              <label htmlFor="description">Description:</label>
              <span>{trackDescriptionLength} / 300</span>
            </div>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              spellCheck="false"
            ></textarea>
          </div>

          <div>
            <label htmlFor="category">Category:</label>
            <select
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="ideas">Ideas</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="priority">Priority:</label>
            <select
              name="priority"
              id="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Priority
              </option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default LeftSideBar;
