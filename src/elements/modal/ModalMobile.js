import React from "react";
import style from "./Modal.module.css"

function ModalMobile(props) {
const posterUrl = "http://image.tmdb.org/t/p/w200"
const { setIsVisable, setFilmData, setFilmIndex, setActivePage, setPage, setFavFilmArr,
    data, filmData, filmIndex, page, activePage, favFilmArr } = props.state;

let addedFilm = favFilmArr.find(el => (filmData?.id === el.id))
  
return ( <div>
    
     <div className={style.backgroundImage} style={{ backgroundImage: `url(${posterUrl + filmData.poster_path})` }}></div>
    <div className={style.modContent}>
          <div className={style.topButtons}>
    <button onClick={() => {
          if (filmIndex === 19) {
            setPage(page - 1)
            setIsVisable(false) }
          else { setIsVisable(false) }
        }
        }>Back</button>
        
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
          }}>Next</button>
          
      </div>
      
    <div className={style.insideContent}>
     <div className={style.imgModal} >
        <img src={posterUrl + filmData.poster_path} alt="movie poster" />
      </div>
       {(addedFilm === undefined && style.visibility !== 'hidden') ? <div className={style.buttonAddToFavorite}>
          <button onClick={(e) => {
            favFilmArr.push(filmData);
            setFavFilmArr(favFilmArr);
            localStorage.setItem("Favorite Data", JSON.stringify(favFilmArr));
            e.target.style.visibility = 'hidden'
            // console.log(favFilmArr)
          }}
              
          >ICON</button>
        </div> : null}

      

      
     <div className={style.scoreRatingRelease}>
      <div> Score: </div><div className={style.textMobile}>{filmData.vote_average}</div>
      <div>Rating: </div><div className={style.textMobile}>{ (filmData.adult === true)? "R" : "Pg"}</div>
        <div>Release Date:</div> <div className={style.textMobile}>{filmData.release_date}</div>
      </div>
       <div className={style.titleFilm}>{filmData.title}</div>
<div className={style.descriptionFilm}>{filmData.overview}</div>
</div>
    </div>
 </div>)
}
  



export default ModalMobile;