// import React from "react";
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}){

    const onSearchValueChange = (event) =>{
        setSearchValue(event.target.value)
    }
    return(
        <div className="search__container">
         <input
            className="search" 
            type="text" 
            placeholder="ToDo" 
            value={searchValue}
            onChange={onSearchValueChange}
        ></input>
         <button className="search__button">
             <i className=" search__icon fas fa-search"></i>
        </button>
       </div>
    )
}

export {TodoSearch}