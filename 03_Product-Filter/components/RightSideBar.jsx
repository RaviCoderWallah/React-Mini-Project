const RightSideBar = () => {
  return (
    <div className="right-sidebar">
      <h1>Filtering Notes</h1>
      <p>Use the filters to narrow down your notes based on specific criteria. Select categories, tags, or date ranges to find exactly what you're looking for.</p>
      <div className="filter-options">

        <div className="filter-category">
          <h3>Categories</h3>
          <div className="category-filter">
            <label>
              <input type="checkbox" value="work" />
              Work
            </label>
            <label>
              <input type="checkbox" value="personal" />
              Personal
            </label>
            <label>
              <input type="checkbox" value="important" />
              Important
            </label>
          </div>
        </div>

        <div className="filter-priority">
          <h3>Priority</h3>
          <div className="priority-filter">
            <label>
              <input type="radio" name="priority" value="high" />
              High
            </label>
            <label>
              <input type="radio" name="priority" value="medium" />
              Medium
            </label>
            <label>
              <input type="radio" name="priority" value="low" />
              Low
            </label>
          </div>
        </div>
        
      </div>


      <div className="filter-btns">
        <button className="apply-filters-button">Apply Filters</button>
        <button className="clear-filters-button">Clear Filters</button>
      </div>
    </div>
  )
}

export default RightSideBar