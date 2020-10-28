import React, {useState, useEffect} from "react";
import Menu from "../menu/Menu";
import style from "./Modal.module.css"


function ModalDesktop(props) {
const posterUrl = "http://image.tmdb.org/t/p/w200"
const { setIsVisable, setFilmData, setFilmIndex, setActivePage, setPage, setFavFilmArr,
    data, filmData, filmIndex, page, activePage, favFilmArr } = props.state;
const [condition, setCondition] = useState(false)  

let addedFilm = favFilmArr.find(el => (filmData?.id === el.id))
 
  useEffect(() => {
    if (condition) {
      favFilmArr.push(filmData);
      setFavFilmArr(favFilmArr);
      localStorage.setItem("Favorite Data", JSON.stringify(favFilmArr));
      style.visibility = 'hidden';
      setCondition(false)}
    }, [condition, favFilmArr, filmData, setFavFilmArr]);
  
  
return ( <div>
      <Menu />
      <div className={style.backgroundImage} style={{ backgroundImage: `url(${posterUrl + filmData.poster_path})` }}></div>
      <div className={style.modContent}>
      <div className={style.topButtons}>
          <button onClick={() => {
            if (filmIndex === 19) {
              setPage(page - 1)
              setIsVisable(false)
            }
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
            // console.log(data, filmData, filmIndex)
          }}>Next Movie</button>
        </div>
        <div className={style.insideContent}>
          <div className={style.imgModal}>
            <img src={posterUrl + filmData.poster_path} alt="movie poster" />
      </div>
      
          <div className={style.insideFilmContent}>
        {(addedFilm === undefined) ? <div className={style.buttonAddToFavorite}>
          <button onClick={() => {
            setCondition(true)
           }}
              
          >Add to favorite</button>
        </div> : null}
      
            <div className={style.titleFilm}>{filmData.title}</div>
        <div className={style.scoreRatingRelease}>
              <div>Score: {filmData.vote_average}</div>
              <div className={style.rating}>Rating: {(filmData.adult === true) ? "R" : "Pg"}</div>
              <div>Release Date: {filmData.release_date}</div>
        </div>
            <div className={style.descriptionFilm}>{filmData.overview}</div>
      </div>
    </div>
      </div>
        </div> 
       )
}
  



export default ModalDesktop;