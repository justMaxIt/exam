import React, {useState, useEffect}  from "react";
import Menu from "../menu/Menu";
import style from "./../main/Main.module.css"
import ModalFav from "./ModalFav";

const posterUrl = "http://image.tmdb.org/t/p/w200"

function FavoriteContent(props) {
  const { favFilmArr, openFavModal,  filmFavData, setFavFilmArr, setOpenFavModal, setFilmFavData} = props
  const [delFilm, setDelFilm] = useState(undefined)  

  
  useEffect(() => {
    if (filmFavData != null && openFavModal === false) {
      setDelFilm(favFilmArr.find(el => (filmFavData.id === el.id)))
  }
    if (delFilm != undefined) {
      let filterArr = favFilmArr.filter(el => el.id != delFilm.id)
      setFavFilmArr(filterArr)
      localStorage.setItem("Favorite Data", JSON.stringify(favFilmArr))
      }
    
  }, [filmFavData, delFilm, favFilmArr]);
  
  
  let openModal = (el) => {
    return (          
    setOpenFavModal(true),
    setFilmFavData(el)
    )
  }
  

 console.log(favFilmArr, filmFavData, delFilm)
    return (
      <div>
        {openFavModal ?
          <ModalFav
            state={props}
          /> :

          <div>
            <Menu />
          <div className={style.page}>
            <div className={style.articleContent}><h4>My favorite</h4></div>

            <div>
              <ul className={style.favContent}>
                {props.favFilmArr?.map((el) =>
                  (<li key={el.id} >
                    <div className={style.favData}>
                      <div className={style.favImg}><img src={posterUrl + el.poster_path} alt="no poster" onClick={() => openModal(el)} /> </div>
                    
                      <div className={style.favBox}>
                        <div className={style.favBoxTop}>
                          <div className={style.favBoxTitle}>{el.title}
                          </div>
                          <div className={style.favBoxButton}>
                            <button onClick={() => {setFilmFavData(el)}}
                              >Unfavorite</button>
                          </div>
                        </div>
                        <div className={style.favBoxDescription}>{el.overview}</div>
                    </div>
                                         
                    </div>
                  </li>))}
              </ul>
        </div>
            </div></div>
          }
            </div>
        




      //   <div className={style.articleContent}>
      //     <h4>Latest Releases</h4>
      //   </div>
      //   <div>
      //     <ul className={style.postersContent}>
      //       {props.data.results?.map((el, ind) =>
      //         (<li key={el.id} >
      //           <img src={posterUrl + el.poster_path} alt="no poster" onClick={() => funcOnPost(el, ind)} /></li>))}
      //     </ul>
      //   </div> 
        
      //  </div >
      )
  
  
}

export default FavoriteContent;