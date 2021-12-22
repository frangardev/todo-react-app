import React from "react";

import {TodoCounter} from './TodoCounter'
import {TodoSearch} from './TodoSearch'
import {TodoList} from './TodoList'
import {CreateTodoButton} from './CreateTodoButton'
import {TodoItem} from './TodoItem'

let todos = [
  {text: "Lavar el carro", complete: false},
  {text: "Sacar al perro", complete: true},
  {text: "Limpiar el cuarto", complete: true},
  {text: "Tomar la pastilla", complete: false},
  {text: "Salir a correr", complete: true},
]
const orderTodos = (todo) =>{
  const todoComplete = todo.filter(item => item.complete)
  const todoIncomplete = todo.filter(item => !item.complete)

  const rta = []
  rta.push(...todoIncomplete, ...todoComplete)
  return rta
}
const todoList = orderTodos(todos)

function App(props) {
  return (
   <React.Fragment>
     <h1 className="title">ToDo React App</h1>
     <TodoSearch />

     <TodoCounter />

     <TodoList>
       <h3 className="todo-list__title"> <span><i className="fas fa-list-ul"></i></span> TodoList</h3>
        {todoList.map(todo => (
          <TodoItem key={todo.text} complete={todo.complete} text={todo.text}/>
        ))}
     </TodoList>

     <CreateTodoButton />

   </React.Fragment>
  );
}

export default App;
