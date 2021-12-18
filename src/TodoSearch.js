import React from "react";
import './styles/TodoSearch.css'

function TodoSearch(props){
    return(
        <div className="search__container">
         <input className="search" type="text" placeholder="ToDo" ></input>
         <button className="search__button">
             <i class=" search__icon fas fa-search"></i>
        </button>
       </div>
    )
}

export {TodoSearch}