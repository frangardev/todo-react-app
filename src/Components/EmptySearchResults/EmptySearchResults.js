import React from "react";
import './EmptySearchResults.css'

function EmptySearchResults(props){
    return(
        <p className="EmptySearchResults">
            <span className="EmptySearchResults-value">{props.searchText}</span> no se ha podido encuentrar :c
        </p>
    )
}

export { EmptySearchResults }