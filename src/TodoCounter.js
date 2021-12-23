import react from "react";
import './styles/TodoCounter.css'

function TodoCounter({total, complete}){
    return(
        <h2 className="todo__counter">Haz completado {complete} tareas de {total}</h2>
    )
}

export {TodoCounter}