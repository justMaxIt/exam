import React  from "react";
import style from "./../main/Main.module.css"
import ModalFav from "./ModalFav";

const posterUrl = "http://image.tmdb.org/t/p/w200"

function FavoriteContent(props) {
  const {  setFavFilmArr, setOpenFavModal, favFilmArr, openFavModal } = props
  // console.log(favFilmArr)


  let openModal = (el, ind) => {
    return setOpenFavModal(true)
  }

//     if (ind === 19) {
//       setPage(page+1)

//     }
//     if(ind <= 19) {
//       setFilmData(el)
//       setIsVisable(true)
//       setFilmIndex(ind)}
// }

//   if (isVisable) {
  
//     return (
//       <div className={style.modal}>
//         <Modal
//           setFilmIndex={setFilmIndex}
//           setIsVisable={setIsVisable}
//           setFilmData={setFilmData}
//           setPage={setPage}
//           setActivePage={setActivePage}
//           data={props.data}
//           page={props.page}
//           activePage={props.activePage}
//           filmData={props.filmData}
//           filmIndex={props.filmIndex}
//       /> </div>)
//   }
//    else {
    return (
      <div>
        {openFavModal ?
          <ModalFav /> :
          <div className={style.page}>
            <div>
              <ul className={style.favContent}>
                {props.favFilmArr?.map((el, ind) =>
                  (<li key={el.id} >
                    <img src={posterUrl + el.poster_path} alt="no poster" onClick={() => openModal(el, ind)} /></li>))}
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