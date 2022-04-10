import React from "react";
import FilmBox from "../container/FilmBox";

const FilmDetail =({selectedFilm})=>{
    <div>
        <h3>Title: {selectedFilm.title}</h3>
        <p>Description: {selectedFilm.description}</p>
        <p>Director: {selectedFilm.director}</p>
        <p>Producer: {selectedFilm.producer}</p>
        <p>Release Date: {selectedFilm.release_date}</p>
        <p>Running Time:{selectedFilm.running_time}</p>
    </div>

}

export default FilmDetail;