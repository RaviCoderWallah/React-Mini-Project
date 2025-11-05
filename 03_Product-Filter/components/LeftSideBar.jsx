import { useState } from "react";

const LeftSideBar = ({ setAllNotes, allNotes, setFilteredNotes }) => {
  const [formData, setFormData] = useState({
    id: crypto.randomUUID(),
    title: '',
    description: '',
    category: '',
    priority: '',
    dateCreateAt: new Date().toLocaleDateString('en-GB').replace(/\//g, '-')
  });

  const [trackTitleLength, isTrackTitleLength] = useState(0);
  const [trackDescriptionLength, isTrackDescriptionLength] = useState(0);

  // Handle input change dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (name === "title") {
      isTrackTitleLength(value.length);
    }

    if (name === "description") {
      isTrackDescriptionLength(value.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new note to both states
    const updatedNotes = [...allNotes, formData];
    setAllNotes(updatedNotes);      // ✅ update master data
    setFilteredNotes(updatedNotes); // ✅ show it immediately on UI

    // Reset form
    setFormData({
      id: crypto.randomUUID(),
      title: '',
      description: '',
      category: '',
      priority: '',
      dateCreateAt: new Date().toLocaleDateString('en-GB').replace(/\//g, '-')
    });
    isTrackTitleLength(0);
    isTrackDescriptionLength(0);
  };

  return (
    <div className="left-sidebar">
      <h1>Create a New Note</h1>
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
              <option value="" disabled>Select Category</option>
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
              <option value="" disabled>Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <button type="submit">Save Note</button>
      </form>
    </div>
  );
};

export default LeftSideBar;
