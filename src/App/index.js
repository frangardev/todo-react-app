import React from "react";
import {AppUi} from './AppUi'

let dafaultTodos = [
  {text: "Lavar el carro", complete: true},
  {text: "Sacar al perro", complete: false},
  {text: "Limpiar el cuarto", complete: true},
  {text: "Tomar la pastilla", complete: false},
  {text: "Salir a correr", complete: true},
]


function App() {
  //Declaramos el estado de manera que todos los elementos de App puedan reaccionar al estado
  const [todos, setTodos] = React.useState(dafaultTodos) //Esto para que la aplicación reaccione a los todos 
  const [searchValue, setSearchValue] = React.useState('')

  //Para saber cuantas tareas hemos completado
  const todosComplete = todos.filter(item => item.complete).length
  const totalTodos = todos.length

  const orderTodos = (todo) =>{
    const todoComplete = todo.filter(item => item.complete)
    const todoIncomplete = todo.filter(item => !item.complete)
  
    const rta = []
    rta.push(...todoIncomplete, ...todoComplete)
    return rta
  }

  //Buscador:
  let searchedTodos = []

  if (!searchValue >= 1) {
    searchedTodos = todos 
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()

      return todoText.includes(searchText)
    })
  }

  const checkTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    if(newTodos[todoIndex].complete === true){
      newTodos[todoIndex].complete = false
    }else{
      newTodos[todoIndex].complete = true
    }
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }


  return (
    <AppUi
      totalTodos={totalTodos}
      todosComplete={todosComplete}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      checkTodo={checkTodo}
      deleteTodo={deleteTodo}
      orderTodos={orderTodos}
    />
  );
}

export default App;
