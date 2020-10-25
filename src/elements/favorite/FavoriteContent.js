import React  from "react";
import style from "./../main/Main.module.css"
import ModalFav from "./ModalFav";

const posterUrl = "http://image.tmdb.org/t/p/w200"

function FavoriteContent(props) {
  const { favFilmArr, openFavModal,  filmFavData, filmfavIndex, setFavFilmArr, setOpenFavModal, setFilmFavData, setFilmFavIndex  } = props
  


  let openModal = (el, ind) => {
    return (          
    setOpenFavModal(true),
    setFilmFavData(el),
    setFilmFavIndex(ind)
    )}
//  console.log(filmFavData, filmfavIndex)
    return (
      <div>
        {openFavModal ?
          <ModalFav
            state={props}
          /> :
          <div className={style.page}>
            <div className={style.articleContent}><h4>My favorite</h4></div>

            <div>
              <ul className={style.favContent}>
                {props.favFilmArr?.map((el, ind) =>
                  (<li key={el.id} >
                    <div className={style.favData}>
                      <div className={style.favImg}><img src={posterUrl + el.poster_path} alt="no poster" onClick={() => openModal(el, ind)} /> </div>
                    
                      <div className={style.favBox}>
                        <div className={style.favBoxTop}>
                          <div className={style.favBoxTitle}></div>
                          <div className={style.favBoxButton}></div>
                        </div>
                        <div className={style.favBoxDescription} ></div>
                    </div>
                                         
                    </div>
                  </li>))}
              </ul>
        content</div>
          </div>}
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