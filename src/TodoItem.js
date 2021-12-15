import react from "react";
import './styles/TodoItem.css'

function TodoItem(props){
    return(     
        <li className="todo__item">
            <span className="todo__item__complete">C</span>
            <p className="todo__item__text">{props.text}</p>
            <span className="todo__item__delete">X</span>
        </li>
    )
}

export {TodoItem}