import React from "react";

function TodoForm({addTodo, setOpenModal}){
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onChange =(event)=>{
        setNewTodoValue(event.target.value)
    }

    //Cancelar Crear Todo
    const onCancel = ()=>{
        setOpenModal(false)
    }
    //Agregar el todo
    const onSubmit =(event)=>{
        //Por defecto submit recarga la página para evitar que haga esto usamos:
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    return(
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Agregar Tarea"
            />
            <div>
                <button
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar    
                </button>
                <button
                    type="submit" //Es el tipo que envia el formulario
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}
export {TodoForm}