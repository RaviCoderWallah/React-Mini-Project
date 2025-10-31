const TodoList = ({todoName, id, completed, onDelete, isCompleted}) => {



    return (
        <div className='todo-list' id={id}>
            <div>
                <input type="checkbox" checked={completed} onChange={() => isCompleted(id)}/>
                <p>{todoName}</p>
            </div>
            <div className='control-btns'>
                <button className='edit-btn'>Edit</button>
                <button className='delete-btn' onClick={() => onDelete(id)}>Delete</button>
            </div>
        </div>
    )
}

export default TodoList