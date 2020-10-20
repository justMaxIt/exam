import React from "react";
import Menu from "../../menu/Menu";
import style from "./Modal.module.css"


function ModalDesktop(props) {
const { setIsVisable, setFilmData,setFilmIndex, data, filmData, FilmIndex } = props;
const posterUrl = "http://image.tmdb.org/t/p/w200"
const backgroundImage = posterUrl + filmData.poster_path
  return (<div className={style.desktopPage}>
    <Menu />
    <div className={style.backgroundImage} style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    <div className={style.desktopContent}>
     
      <div className={style.topButtons}>
      <button onClick={() => setIsVisable(false)}>Back to list</button>
      <button onClick={() => {
        if (FilmIndex <= 18) {
          setFilmIndex(FilmIndex + 1);
          setFilmData(data[FilmIndex + 1])
        }
      }}>Next Movie</button>
      </div>


      <div className={style.insideContent}>
      <div className={style.imgModal}>
        <img src={posterUrl + filmData.poster_path} alt="movie poster" />
        </div>
        <div className={style.insideFilmContent}>
       <div className={style.buttonAddToFavorite}>
      <button>Add to favorite</button>
      </div>
      
        <div className={style.titleFilm}>{filmData.title}</div>
        <div className={style.scoreRatingRelease}>
      <div>Score: {filmData.vote_average}</div>
      <div style={{borderLeft: "2px solid rgba(255, 255, 255, 0.3)", borderRight: "2px solid rgba(255, 255, 255, 0.3)" }}>Rating: { (filmData.adult === true)? "R" : "Pg"}</div>
      <div>Release Date: {filmData.release_date}</div></div>
<div style={{borderTop: "2px solid rgba(255, 255, 255, 0.3)", borderBottom: "2px solid rgba(255, 255, 255, 0.3)", margin: "5%", marginRight: "0", padding: "3% 0"}}>{filmData.overview}</div>
</div></div>
    </div>
    
    </div>


    )
}
  



export default ModalDesktop;