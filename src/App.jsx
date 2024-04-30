import React, { Fragment, useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to gym",
      description: "Go to gym today"
    },
    {
      id: 2,
      title: "Go to gym",
      description: "Go to gym today"
    },
    {
      id: 3,
      title: "Eat Food",
      description: "Eat food"
    },
    {
      id: 4,
      title: "Go to class",
      description: "Go to class today"
    }
  ]);

  function addTodo() {
    const newTodos = [...todos]; // Correction: Initialize newTodos as a copy of todos array
    newTodos.push({
      id: todos.length + 1, // Correction: Ensure unique id by using todos length
      title: "Task " + Math.random(), // Correction: Changed Math.random() to string
      description: "Description " + Math.random() // Correction: Changed Math.random() to string
    });
    setTodos(newTodos);
  }

  return (
    <div>
      <button onClick={addTodo}>Add to todo</button>
      {todos.map(todo => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}

export default App;
