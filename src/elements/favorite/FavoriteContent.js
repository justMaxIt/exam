import React  from "react";
import Menu from "../menu/Menu";
import style from "./../main/Main.module.css"
import ModalFav from "./ModalFav";

const posterUrl = "http://image.tmdb.org/t/p/w200"

function FavoriteContent(props) {
  const {setOpenFavModal, setFilmFavData, openFavModal } = props
     
  let openModal = (el) => {
    return (          
    setOpenFavModal(true),
    setFilmFavData(el)
    )
  }
  
//  console.log(favFilmArr, filmFavData, delFilm)
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
        )
  }

export default FavoriteContent;