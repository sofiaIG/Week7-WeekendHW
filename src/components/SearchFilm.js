import React, { useState } from "react";

const SearchFilm = ({ searchedFilm }) => {
  return (
    // <>
    //   <h3>Title: {searchedFilm.title}</h3>
    //   <p>Description: {searchedFilm.description}</p>
    //   <p>Director: {searchedFilm.director}</p>
    //   <p>Producer: {searchedFilm.producer}</p>
    //   <p>Release Date: {searchedFilm.release_date}</p>
    //   <p>Running Time:{searchedFilm.running_time}</p>
    // </>

    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      <table>
        <tr>
          <th>Country</th>
          <th>Continent</th>
        </tr>
        {countries.map((country, index) => {
          <div>
            <tr>
              <td>{country.name}</td>
              <td>{country.continent}</td>
            </tr>
          </div>;
        })}
      </table>
    </div>
  );
};

export default SearchFilm;
