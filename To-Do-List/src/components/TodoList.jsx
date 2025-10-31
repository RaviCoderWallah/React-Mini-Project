const TodoList = ({
    todoName,
    id,
    completed,
    onDelete,
    isCompleted,
    isEditing,
    onStartEdit,
    editText,
    onEditChange,
    onSaveEdit,
    onCancelEdit
}) => {
    return (
        <div className='todo-list' id={id}>
            <div>
                <input type="checkbox" checked={completed} onChange={() => isCompleted(id)} />
                {isEditing ? (
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => onEditChange(e.target.value)}
                        className="edit-input"
                    />
                ) : (
                    <p>{todoName}</p>
                )}
            </div>
            <div className='control-btns'>
                {isEditing ? (
                    <>
                        <button className='save-btn' onClick={onSaveEdit}>Save</button>
                        <button className='cancel-btn' onClick={onCancelEdit}>Cancel</button>
                    </>
                ) : (
                    <>
                        <button className='edit-btn' onClick={onStartEdit}>Edit</button>
                        <button className='delete-btn' onClick={() => onDelete(id)}>Delete</button>
                    </>
                )}
            </div>
        </div>
    )
}

export default TodoList