import React from "react";
import {AppUi} from './AppUi'

const dafaultTodos = [
  {text: "Lavar el carro", complete: true},
  {text: "Sacar al perro", complete: false},
  {text: "Limpiar el cuarto", complete: true},
  {text: "Tomar la pastilla", complete: false},
  {text: "Salir a correr", complete: true},
]

function App() {
  //Local Storage
  const localStorageTodos = localStorage.getItem('TODOS_V1')
  let parsedTodos

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = [] //{text: "Agregar mis tareas", complete: false}
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos)
    localStorage.setItem('TODOS_V1', stringifiedTodos)
    setTodos(newTodos)
  }


  //Declaramos el estado de manera que todos los elementos de App puedan reaccionar al estado
  const [todos, setTodos] = React.useState(parsedTodos) //Esto para que la aplicación reaccione a los todos 
  const [searchValue, setSearchValue] = React.useState('')

  //Para saber cuantas tareas hemos completado
  const todosComplete = todos.filter(item => item.complete).length
  const totalTodos = todos.length

  //Ordena los todo de "Por completar" a los que ya fuerón completados
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

  //Funcionalidad:
  //   Marcar o desmarcar una tarea
  const checkTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    if(newTodos[todoIndex].complete === true){
      newTodos[todoIndex].complete = false
    }else{
      newTodos[todoIndex].complete = true
    }
    saveTodos(newTodos)
  }

  //Eliminar una tarea
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
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
