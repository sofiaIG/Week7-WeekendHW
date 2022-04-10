import React, {useState, useEffect} from "react";
import FilmList from "../componentss/FilmList";
import FilmDetail from "../componentss/FilmDetail";
import SearchBar from "../components/SearchBar";

const FilmBox =()=>{
    const [films, setFilm] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState([]);
    const [searchInput, setSerchInput] = useState([]);

    useEffect(() =>{
        getFilm();
      }, [])


      const getFilm = function(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(films =>setFilm(films));
        
      }

      const onClickFilm = function(film) {
          setSelectedFilm(film)
      }

      const onSearchedFilm = function(film){
        setSelectedFilm(film)
      }

      const searchBar = () =>{
      }
      
      const handleChange =(evt) =>{
        evt.prevent.default();
        setSearchInput(e.target.value)
      };


      return (
        <div>
        
        <FilmList films={films} onClickFilm = {onClickFilm}/>
        {selectedFilm ? <FilmDetail selectedFilm={selectedFilm} /> : null}
    </div>
          
      )

}

export default FilmBox;