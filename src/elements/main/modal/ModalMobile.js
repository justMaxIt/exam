import React from "react";
import Menu from "../../menu/Menu";
import style from "./Modal.module.css"


function ModalMobile(props) {
 const { setIsVisable, setFilmData,setFilmIndex, data, filmData, FilmIndex } = props;
const posterUrl = "http://image.tmdb.org/t/p/w200"
const backgroundImage = posterUrl + filmData.poster_path
  return ( <div className={style.mobilePage}>
    
    <div className={style.backgroundImage} style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    <div className={style.mobileContent}           >
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
      <div>Score: {filmData.vote_average}</div>
      <div>Rating: { (filmData.adult === true)? "R" : "Pg"}</div>
      <div>Release Date: {filmData.release_date}</div>
<div>{filmData.overview}</div>

    </div>
    
    </div>

    )
}
  



export default ModalMobile;