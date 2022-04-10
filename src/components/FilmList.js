import React from "react";
import FilmListItem from "./FilmListItems";

const FilmList =({films})=>{

    const filmItems = films.map((film, index) => {
        return <FilmListItem film={film} key={index} />
      })

    return(
        <div>
        <ul>
          {filmItems}
        </ul>
      </div>

    )
    }


export default FilmList;