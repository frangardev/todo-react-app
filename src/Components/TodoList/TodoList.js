import React from "react";
import './TodoList.css'

function TodoList(props){
    return(  
        <section className="Todos__container">
            <h3 className="todo-list__title"> <span><i className="fas fa-list-ul"></i></span> TodoList</h3>
            
            {(props.searchText.length >= 1 && !props.total > 0) 
                ?  props.onEmptySearchResults(props.searchText)
                : null
            }

            <ul>
                {props.children}
            </ul>
        </section>   
    )
}

export {TodoList}