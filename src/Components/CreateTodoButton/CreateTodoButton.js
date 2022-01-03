import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton({openModal, setOpenModal}){
    const createToDo =()=>{
        (openModal) ? setOpenModal(false) : setOpenModal (true)
    }
    return(
        <button 
            className="addTask"
            className={`addTask ${openModal && 'closeAddTask'}`}
            onClick={createToDo}
        >
            +
        </button>

    )
}

export {CreateTodoButton}