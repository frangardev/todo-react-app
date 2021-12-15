import React from "react";
import './styles/TodoSearch.css'

function TodoSearch(props){
    return(
         <input className="search" type="text" placeholder="ToDo" ></input>
    )
}

export {TodoSearch}