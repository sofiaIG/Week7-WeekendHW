import React from "react";
import FilmList from "./FilmList";
import FilmBox from "../container/FilmBox";

const FilmListItem = ({film}) =>{

    const handleClick = function(){
        onClickFilm(film)
    }

    return <li>{film.title}</li>
    

}

export default FilmListItem;