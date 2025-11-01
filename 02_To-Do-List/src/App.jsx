import { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AlertBox from './components/AlertBox';
import { getDataLocalStorage, saveDataLocalStorage } from './helpers/localStorageHelper';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoName, setTodoName] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    const savedTodos = getDataLocalStorage("todoData");
    if (savedTodos) {
      setTodoList(savedTodos);
    }
  }, []);

  const handleInputValue = (value) => {
    setTodoName(value);
    setShowAlert(false);
  };

  const handleAddTodo = () => {
    if (todoName.length === 0) {
      setShowAlert(true);
      setAlertType("error");
    } else {
      const newTodo = {
        id: crypto.randomUUID(),
        text: todoName,
        completed: false
      };

      const updatedTodos = [...todoList, newTodo];
      setTodoList(updatedTodos);
      saveDataLocalStorage(updatedTodos);
      setTodoName("");
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedTodos);
    saveDataLocalStorage(updatedTodos);
    // if editing the same item, cancel edit
    if (editId === id) {
      setEditId(null);
      setEditText("");
    }
  };

  const handleToggleCompleted = (id) => {
    const updatedTodos = todoList.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoList(updatedTodos);
    saveDataLocalStorage(updatedTodos);
  };

  // --- Edit handlers ---
  const handleStartEdit = (id, currentText) => {
    setEditId(id);
    setEditText(currentText);
    setShowAlert(false);
  };

  const handleEditChange = (value) => {
    setEditText(value);
  };

  const handleSaveEdit = () => {
    if (!editText || editText.trim().length === 0) {
      setShowAlert(true);
      setAlertType("error");
      return;
    }
    const updatedTodos = todoList.map(todo =>
      todo.id === editId ? { ...todo, text: editText } : todo
    );
    setTodoList(updatedTodos);
    saveDataLocalStorage(updatedTodos);
    setEditId(null);
    setEditText("");
    setAlertType("success");
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setEditText("");
  };


  return (
    <>
      {showAlert && <AlertBox alertType={alertType} msg="Please ! Fill the todo first." />}

      <div className='todo-list-container'>
        <h1>Todo List</h1>

        <div className='todo-list-input'>
          <input
            type="text"
            placeholder='Your todo..'
            value={todoName}
            onChange={(e) => handleInputValue(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>

        <div className='todo-list-result'>
          {Array.isArray(todoList) && todoList.map((todo) => (
            <TodoList
              key={todo.id}
              id={todo.id}
              todoName={todo.text}
              completed={todo.completed}
              onDelete={handleDeleteTodo}
              isCompleted={handleToggleCompleted}
              isEditing={editId === todo.id}
              onStartEdit={() => handleStartEdit(todo.id, todo.text)}
              editText={editId === todo.id ? editText : ""}
              onEditChange={handleEditChange}
              onSaveEdit={handleSaveEdit}
              onCancelEdit={handleCancelEdit}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
