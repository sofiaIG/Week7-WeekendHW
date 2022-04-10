import React, { useState, useEffect } from "react";
import FilmList from "../components/FilmList";
import SearchFilm from "../components/SearchFilm";

const FilmBox = () => {
  const [films, setFilm] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState([]);
  const [searchedFilm, setSearchedFilm] = useState([]);

  useEffect(() => {
    getFilm();
  }, []);

  const getFilm = function () {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((films) => setFilm(films));
  };

  const handleSearchInput = (evt) => {
    evt.prevent.default();
    setSearchedFilm(evt.target.value);
  };

  return (
    <div>
      
      <FilmList films={films} />
      <input
        type="text"
        placeholder="Search here"
        onChange={handleSearchInput}
        value={searchedFilm}
      />
      {console.log(searchedFilm)}
      {searchedFilm ? <SearchFilm searchedFilm={searchedFilm} /> : null}
    </div>
  );
};

export default FilmBox;
