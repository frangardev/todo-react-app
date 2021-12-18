import react from "react";
import './styles/TodoItem.css'

function TodoItem(props){
    const funciona = (msg) =>{
        alert(msg)
    }
    return(     
        <li className={`todo__item ${props.complete && 'todo__item-complete'}`}>
            <button 
                className="todo__item__complete"
                onClick={() => funciona(`Completaste la tarea: " ${props.text}"`)}
            >
                {(props.complete) ? <i class="icon icon-check fas fa-check"></i> : null}
            </button>
            <p className={`todo__item__text ${props.complete && 'todo__item-complete-p'}`}>
                {props.text}
            </p>
            <span 
                className="todo__item__delete"
                onClick={() => funciona(`Eliminaste la tarea: "${props.text}"`)}
            ><i class="far fa-times-circle"></i></span>
        </li>
    )
}

export {TodoItem}

