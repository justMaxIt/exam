import React, { useState } from "react";
import Menu from "../../menu/Menu";
import style from "./Modal.module.css"


function ModalDesktop(props) {
const { setIsVisable, setFilmData,setFilmIndex, data, filmData, FilmIndex } = props;
   const posterUrl = "http://image.tmdb.org/t/p/w200"

  return (<div>

    <Menu />
    <div className={style.desktop}           >
    
      <button onClick={() => setIsVisable(false)}>Back to list</button>
      <button onClick={() => {
        if (FilmIndex <= 18) {
          setFilmIndex(FilmIndex + 1);
          setFilmData(data[FilmIndex + 1])
        }
      }}>Next Movie</button>

      <img src={posterUrl + filmData.poster_path} alt="movie poster" />
      <button>Add to favorite</button>

      <div>{filmData.title}</div>
      <div>{filmData.vote_average}</div>
      <div>{ (filmData.adult === true)? "R" : "Pg"}</div>
      <div>{filmData.release_date}</div>
<div>{filmData.overview}</div>


    </div>
    </div>
    )
}
  



export default ModalDesktop;