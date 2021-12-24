import react from "react";
import './TodoList.css'

function TodoList(props){
    return(     
        <ul className="Todos__container">
            {props.children}
        </ul>
    )
}

export {TodoList}