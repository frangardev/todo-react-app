import React from "react";

import { useTodo } from "./useTodo";

import {TodoCounter} from '../Components/TodoCounter/TodoCounter'
import {TodoSearch} from '../Components/TodoSearch/TodoSearch'
import {TodoList} from '../Components/TodoList/TodoList'
import {CreateTodoButton} from '../Components/CreateTodoButton/CreateTodoButton'
import {TodoItem} from '../Components/TodoItem/TodoItem'
import {Modal} from '../Components/Modal/index'
import { TodoForm } from "../Components/TodoForm/TodoForm";


function App() {
    const {
        totalTodos,
        todosComplete,
        searchValue,
        setSearchValue,
        searchedTodos,
        checkTodo,
        deleteTodo,
        orderTodos,
        openModal,
        setOpenModal,
        addTodo
    } = useTodo()

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
                complete = {todosComplete}
            />

            <TodoList>
            <h3 className="todo-list__title"> <span><i className="fas fa-list-ul"></i></span> TodoList</h3>
                {orderTodos(searchedTodos).map(todo => (
                <TodoItem 
                    key={todo.text} 
                    complete={todo.complete} 
                    text={todo.text}
                    checkTodo={() => checkTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
                ))}
            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm 
                        addTodo={addTodo}
                        setOpenModal={setOpenModal}
                    />
                </Modal>
            )}

            <CreateTodoButton
             setOpenModal={setOpenModal}
             openModal={openModal}
             />

        </React.Fragment>
    );
}

export default App;
