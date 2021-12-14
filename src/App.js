import React from "react";

import {TodoCounter} from './TodoCounter'
import {TodoSearch} from './TodoSearch'
import {TodoList} from './TodoList'
import {CreateTodoButton} from './CreateTodoButton'
import {TodoItem} from './TodoItem'

let todos = [
  {text: "Lavar el carro", complete: false},
  {text: "Sacar al perro", complete: false},
  {text: "Limpiar el cuarto", complete: false},
  {text: "Tomar la pastilla", complete: false},
  {text: "Salir a correr", complete: false},
]

function App(props) {
  return (
   <React.Fragment>

     <TodoCounter />

     <TodoSearch />
      
     <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
     </TodoList>

     <CreateTodoButton />

   </React.Fragment>
  );
}

export default App;
