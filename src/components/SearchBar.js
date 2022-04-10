import React, {useState} from "react";



const SearchBar = (searchInput) =>{

    if (searchInput.length > 0) {
        films.filter((film) => {
        return film.title.match(searchInput);
       });
        }

    return(
        <>
        <h2>Search for film</h2>
        </>
    )
      

}

export default SearchBar;

