import react from "react";
import './styles/TodoItem.css'

function TodoItem(props){
    return(     
        <li className={`todo__item ${props.complete && 'todo__item-complete'}`}>
            <button className="todo__item__complete">
                {(props.complete) ? <i class="icon icon-check fas fa-check"></i> : null}
            </button>
            <p className={`todo__item__text ${props.complete && 'todo__item-complete-p'}`}>{props.text +' '+ props.complete}</p>
            <span className="todo__item__delete"><i class="far fa-times-circle"></i></span>
        </li>
    )
}

export {TodoItem}

