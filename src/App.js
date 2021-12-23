import React from "react";

import {TodoCounter} from './TodoCounter'
import {TodoSearch} from './TodoSearch'
import {TodoList} from './TodoList'
import {CreateTodoButton} from './CreateTodoButton'
import {TodoItem} from './TodoItem'

let dafaultTodos = [
  {text: "Lavar el carro", complete: true},
  {text: "Sacar al perro", complete: false},
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

function App() {
  const todoList = orderTodos(dafaultTodos)

  //Declaramos el estado de manera que todos los elementos de App puedan reaccionar al estado
  const [todos, setTodos] = React.useState(todoList) //Esto para que la aplicación reaccione a los todos 
  const [searchValue, setSearchValue] = React.useState('')

  //Para saber cuantas tareas hemos completado
  const todoComplete = todoList.filter(item => item.complete).length
  const totalTodos = todoList.length


  //Buscador:

let searchTodos = []

if (!searchValue >= 1) {
  searchTodos= todoList
}else{
  searchTodos = todoList.filter(todo => {
    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()

    return todoText.includes(searchText)
  })
}


  return (
   <React.Fragment>
     <h1 className="title">ToDo React App</h1>
     <TodoSearch 
      //Asi le pasamos el estdo
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
     />

     <TodoCounter 
        total = {totalTodos}
        complete = {todoComplete}
     />

     <TodoList>
       <h3 className="todo-list__title"> <span><i className="fas fa-list-ul"></i></span> TodoList</h3>
        {searchTodos.map(todo => (
          <TodoItem key={todo.text} complete={todo.complete} text={todo.text}/>
        ))}
     </TodoList>

     <CreateTodoButton />

   </React.Fragment>
  );
}

export default App;
