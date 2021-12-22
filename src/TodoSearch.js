import React from "react";
import './styles/TodoSearch.css'

function TodoSearch(props){

    const [searchValue, setSearchValue] = React.useState('')

    const onSearchValueChange = (event) =>{
        console.log(event.target.value);
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
        <p className="me-borras-pendejo">{searchValue}</p>
       </div>
    )
}

export {TodoSearch}