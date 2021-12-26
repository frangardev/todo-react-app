import React from "react";
import {AppUi} from './AppUi'
import {useLocalStorage} from '../utils/Hook-localStorage'

function App() {
  //Declaramos el estado de manera que todos los elementos de App puedan reaccionar al estado
  const [todos, setTodos] = useLocalStorage('TODOS_V1', [])//Esto para que la aplicación reaccione a los todos 
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
    setTodos(newTodos)
  }

  //Eliminar una tarea
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
  )
}

export default App;
