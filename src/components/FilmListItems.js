import React from "react";
import FilmList from "./FilmList";
import FilmBox from "../container/FilmBox";

const FilmListItem = ({film, onClickFilm}) =>{

    const handleClick = function(){
        onClickFilm(film)
    }

    return <li onClick={handleClick}>{film.title}</li>
    

}

export default FilmListItem;