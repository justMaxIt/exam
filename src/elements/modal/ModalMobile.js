import React from "react";
import { useLocation } from "react-router-dom";
import style from "./Modal.module.css"


function ModalMobile(props) {

let location = useLocation();
const { setIsVisable, setFilmData, setFilmIndex, setActivePage, setPage, data, filmData, filmIndex, page, activePage } = props.props;
const posterUrl = "http://image.tmdb.org/t/p/w200"

  
return ( <div>
  {location.pathname === "/" ?
    
  <div className={style.mobilePage}>
    <div className={style.backgroundImage} style={{ backgroundImage: `url(${posterUrl + filmData.poster_path})` }}></div>
    <div className={style.modContent}>
          <div className={style.topButtons}>
    <button onClick={() => {
          if (filmIndex === 19) {
            setPage(page - 1)
            setIsVisable(false) }
          else { setIsVisable(false) }
        }
        }>Back to list</button>
        
        <button onClick={(e) => {
            if (filmIndex <= 18) {
            setFilmIndex(filmIndex + 1);
            setFilmData(data.results[filmIndex + 1])
          }
          if (filmIndex === 18) {
            setPage(page + 1);
          }
          if (filmIndex === 19) {
                        setFilmIndex(0);
            setFilmData(data.results[0]);
            setActivePage(activePage + 1)
          }
          if (data.results[data.results.length - 1] === filmData) {
         setFilmIndex(filmIndex);
         setFilmData(data.results[filmIndex]);
         e.target.style.visibility = 'hidden'
}
          }}>Next Movie</button>
      
      
      
      </div>
      
       {/* <div className={style.mobileImg}> */}
        <img className={style.mobileImg} src={posterUrl + filmData.poster_path} alt="movie poster" />
        <div className={style.buttonAddToFavorite}>
      <button>ICON</button>
</div>
     <div className={style.scoreRatingReleasMobile}>
     <div style={{marginTop: "30px"}}> Score: </div><div className={style.textMobile}>{filmData.vote_average}</div>
      <div>Rating: </div><div className={style.textMobile}>{ (filmData.adult === true)? "R" : "Pg"}</div>
      <div>Release Date:</div> <div className={style.textMobile}>{filmData.release_date}</div></div>
       <div className={style.titleFilm} style={{padding: "0"}}>{filmData.title}</div>
<div className={style.descriptionFilm} style={{margin: "0"}}>{filmData.overview}</div>

    </div>
    
    </div>
:
    <div>
      modal fav
    </div>}
  </div>)
}
  



export default ModalMobile;