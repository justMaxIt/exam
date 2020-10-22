import React from "react";
import Menu from "../../menu/Menu";
import style from "./Modal.module.css"




function ModalDesktop(props) {
const { setIsVisable, setFilmData, setFilmIndex, setActivePage, setPage, data, filmData, filmIndex, page, activePage } = props;
  const posterUrl = "http://image.tmdb.org/t/p/w200"
  
  const backgroundImage = posterUrl + filmData.poster_path
  
  return (<div className={style.desktopPage}>
    <Menu />
    <div className={style.backgroundImage} style={{ backgroundImage: `url(${backgroundImage})` }}></div>
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
        
        <button onClick={() => {
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
//           if (data.page === data.total_pages) {
//   return null
// }

           console.log(data)
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
<div className={style.descriptionFilm}>{filmData.overview}</div>
</div></div>
    </div>
    
    </div>


    )
}
  



export default ModalDesktop;