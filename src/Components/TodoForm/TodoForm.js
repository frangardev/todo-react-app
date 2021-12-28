import React from "react";
import './TodoForm.css'

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
        <form onSubmit={onSubmit} className="form">
            <label className="form__label">Crear una nueva tarea</label>
            <textarea 
                autoFocus
                required
                className="form__textarea"
                onFocus={true}
                value={newTodoValue}
                onChange={onChange}
                placeholder="Agregar Tarea"
            />
            {/* <div className="form__button__container"> */}
                <button
                    className="form__button form__button-secondary"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar    
                </button>
                <button
                    className="form__button form__button-primary"
                    type="submit" //Es el tipo que envia el formulario
                >
                    Añadir
                </button>
            {/* </div> */}
        </form>
    )
}
export {TodoForm}