import React from "react";
import { TodoCounter } from "./TodoCounter.jsx";
import { TodoSearch } from "./TodoSearch.jsx";
import { TodoList } from "./TodoList.jsx";
import { TodoItem } from "./TodoItem.jsx";
import { CreateTodoButton } from "./CreateTodoButton.jsx";
//import './App.css';
const todos=[
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false}
];
function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo =>(
          <TodoItem key={todo.text} text={todo.text} />
          ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;