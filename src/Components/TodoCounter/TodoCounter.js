import react from "react";
import { traverseTwoPhase } from "react-dom/cjs/react-dom-test-utils.production.min";
import './TodoCounter.css'

function TodoCounter({total, complete}){
    const porcentaje = Math.round(complete * 100 / total)
    let msg = ''

    if(porcentaje === 0){
        (total <= 0)? msg = `Hola, agrega una nueva tareas. ` : msg = ` Tienes ${total} tareas por completar.`
    }else if(porcentaje >= 1 && porcentaje < 50){
        msg = `Haz completado ${complete} tareas de ${total}.`
    }else if(porcentaje >= 50 && porcentaje < 75){
        msg = `No te rindas, faltan ${total - complete} de ${total} tareas.`
    }else if(porcentaje >= 75 && porcentaje < 100){
        msg = (complete < 1) ? `Ya casi. Faltan ${total - complete} tareas.`: `Ya casi. Solo falta ${total - complete} tarea.`
    }else if(porcentaje == 100){
        msg = '¡Felicidades! Completaste todas tus tareas.'
    }else{
        msg = `Agrega una nueva tareas para comenzar. `
    }

    return(
        <h2 className="todo__counter">{msg}</h2>
    )
}

export {TodoCounter}

