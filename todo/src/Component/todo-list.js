import React, { useId, useState } from 'react';
import "./todo-list.css";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputText, setInputText] = useState("");

  const updateTodo = (event) => {
    setInputText(event.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault()
    const newTodo = {
      id: Math.random(),
      task: inputText,

    };
    const updatedList = [newTodo, ...todoList];
    setTodoList(updatedList);
    setInputText("");
  };

  const editButton = (id) => {
    const updatedList = [...todoList];
    const editedTodoIndex = updatedList.findIndex(todo => todo.id === id);
    const editedTodo = prompt('Edit the todo:', updatedList[editedTodoIndex].task);
    updatedList[editedTodoIndex].task = editedTodo
    setTodoList(updatedList);
  };

  const deleteTodo = (id) => {
    const filteredTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(filteredTodoList);
  };


  return (
    <div style={{ padding: 30 }}>
      <h1>Todo List</h1>

      <form onSubmit={addTodo}>
        <input type='text' name='task' onChange={updateTodo} value={inputText} placeholder='Enter Task' style={{ padding: '5px 10px', width: 300, fontSize: 17 }} />
        <button>Add</button>
      </form>

      <ul style={{ textAlign: 'left' }}>
        {todoList.map((todo) => <li key={todo.id}>
          <span>{todo.task}</span>
          <button onClick={() => editButton(todo.id)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>)}
      </ul>
    </div >

  );
};

export default TodoList;
