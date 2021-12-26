import react from "react";
import './CreateTodoButton.css'

function CreateTodoButton(){
    const createToDo =()=>{
        alert("*Abre creador de tares XD*")
    }
    return(
        <button 
            className="addTask"
            onClick={createToDo}
        >
            {/* <i className="addTask__icon" class="far fa-times-circle"></i> */}
            +
        </button>

    )
}

export {CreateTodoButton}