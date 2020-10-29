import React, {useState, useEffect} from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { GrStar } from "react-icons/gr"
import style from "./Modal.module.css"

function ModalMobile(props) {
const posterUrl = "http://image.tmdb.org/t/p/w200"
const { setIsVisable, setFilmData, setFilmIndex, setActivePage, setPage, setFavFilmArr,
    data, filmData, filmIndex, page, activePage, favFilmArr } = props.state;
const [condition, setCondition] = useState(false)  

let addedFilm = favFilmArr.find(el => (filmData?.id === el.id))
  
const newDate = new Date(Date.parse(filmData.release_date))
const year = newDate.getFullYear()
function convertDate(date) {
let months = ['January', 'February', 'March', 'April', 'May', 'June',
              'Jule', 'August', 'September', 'October', 'November', 'December'];
  return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
  } 
  
  useEffect(() => {
    if (condition === true) {
      favFilmArr.push(filmData);
      setFavFilmArr(favFilmArr);
      localStorage.setItem("Favorite Data", JSON.stringify(favFilmArr));
      style.visibility = 'hidden';
      setCondition(false)}
    }, [condition, favFilmArr, filmData, setFavFilmArr]);
  
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
        }><div className={style.topButtonsButInside}><FaChevronLeft />  Back</div></button>
        
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
          }}><div className={style.topButtonsButInside}>Next  <FaChevronRight /></div></button>
          
      </div>
      
    <div className={style.insideContent}>
     <div className={style.imgModal} >
        <img src={posterUrl + filmData.poster_path} alt="movie poster" />
      </div>
       {(addedFilm === undefined) ? <div className={style.buttonAddToFavorite}>
          <button onClick={() => {
            setCondition(true)}}
              
          ><GrStar size="2.5em"/></button>
        </div> : null}

      

      
     <div className={style.scoreRatingRelease}>
      <div> Score: </div><div className={style.textMobile}>{filmData.vote_average}</div>
      <div>Rating: </div><div className={style.textMobile}>{ (filmData.adult === true)? "R" : "Pg"}</div>
        <div>Release Date:</div> <div className={style.textMobile}>{convertDate(newDate)}</div>
      </div>
       <div className={style.titleFilm}>{filmData.title + ` (${year})`}</div>
<div className={style.descriptionFilm}>{filmData.overview}</div>
</div>
    </div>
 </div>)
}
  



export default ModalMobile;