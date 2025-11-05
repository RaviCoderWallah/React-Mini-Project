import { useState } from "react"

const RightSideBar = ({ allNotes, setFilteredNotes }) => {

  const [filterPriority, setFilterPriority] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const handleChange = (e) => {
    setFilterPriority(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setFilterCategory(e.target.value);
  }

  const handleApplyFilter = () => {
    // If no filters selected, show all notes
    if (filterPriority === "" && filterCategory === "") {
      setFilteredNotes(allNotes);
      return;
    }

    // Filter based on both conditions
    const filteredData = allNotes.filter((note) => {
      const matchPriority = filterPriority ? note.priority === filterPriority : true;
      const matchCategory = filterCategory ? note.category === filterCategory : true;
      return matchPriority && matchCategory;
    });

    setFilteredNotes(filteredData);
  };

  const handleClearFilter = () => {
    setFilterPriority("");
    setFilterCategory("");
    setFilteredNotes([]); // show all notes again
  };

  return (
    <div className="right-sidebar">
      <h1>Filtering Notes</h1>
      <p>Use the filters to narrow down your notes based on specific criteria. Select categories, tags, or date ranges to find exactly what you're looking for.</p>
      <div className="filter-options">

        <div className="filter-category">
          <h3>Categories</h3>
          <div className="category-filter">
            <label>
              <input
                type="radio"
                value="work"
                onChange={handleCategoryChange}
                checked={filterCategory === "work"}
              />
              Work
            </label>
            <label>
              <input
                type="radio"
                value="personal"
                onChange={handleCategoryChange}
                checked={filterCategory === "personal"}
              />
              Personal
            </label>
            <label>
              <input
                type="radio"
                value="important"
                onChange={handleCategoryChange}
                checked={filterCategory === "important"}
              />
              Important
            </label>
          </div>
        </div>

        <div className="filter-priority">
          <h3>Priority</h3>
          <div className="priority-filter">
            <label>
              <input
                type="radio"
                name="priority"
                value="high"
                onChange={handleChange}
                checked={filterPriority === "high"}
              />
              High
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value="medium"
                onChange={handleChange}
                checked={filterPriority === "medium"}

              />
              Medium
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value="low"
                onChange={handleChange}
                checked={filterPriority === "low"}
              />
              Low
            </label>
          </div>
        </div>

      </div>


      <div className="filter-btns">
        <button
          className="apply-filters-button"
          onClick={handleApplyFilter}
        >
          Apply Filters
        </button>
        <button
          className="clear-filters-button"
          onClick={handleClearFilter}
        >
          Clear Filters
        </button>
      </div>
    </div>
  )
}

export default RightSideBar