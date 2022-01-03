import React from "react";
import './TodoItem.css'

function TodoItem(props){
    return(     
        <li className={`todo__item ${props.complete && 'todo__item-complete'}`}>
            <button 
                className="todo__item__complete-button"
                onClick={props.checkTodo}
            >
                {(props.complete) ? <i className="icon icon-check fas fa-check"></i> : null}
            </button>
            <p className={`todo__item__text ${props.complete && 'todo__item-complete-p'}`}>
                {props.text}
            </p>
            <span
                className="todo__item__delete"
                onClick={props.onDelete}
            >
                <i className="fas fa-times"></i>
            </span>
        </li>
    )
}

export {TodoItem}

