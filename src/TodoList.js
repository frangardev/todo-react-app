import react from "react";
import './styles/TodoList.css'

function TodoList(props){
    return(     
        <ul className="Todos__container">
            {props.children}
        </ul>
    )
}

export {TodoList}