import React from "react";
import './styles/TodoSearch.css'

function TodoSearch(props){
    const onSearchValueChange = (event) =>{
        console.log(event.target.value);
    }
    return(
        <div className="search__container">
         <input
            className="search" 
            type="text" 
            placeholder="ToDo" 
            onChange={onSearchValueChange}
        ></input>
         <button className="search__button">
             <i className=" search__icon fas fa-search"></i>
        </button>
       </div>
    )
}

export {TodoSearch}