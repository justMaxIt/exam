import React  from "react";
import Modal from "../modal/Modal";
import style from "./../main/Main.module.css"



const posterUrl = "http://image.tmdb.org/t/p/w200"

function FavoriteContent(props) {
let {setPage, activePage, setActivePage, data, page, 
setFilmData, isVisable, setIsVisable,  setFilmIndex} = props
 
  
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
      {isVisable? 
       <Modal />   :    <div className={style.page}>
                <div>
                        content</div> 
                    </div>
               }
        {/* <div className={style.articleContent}>
          <h4>Latest Releases</h4>
        </div>
        <div>
          <ul className={style.postersContent}>
            {props.data.results?.map((el, ind) =>
              (<li key={el.id} >
                <img src={posterUrl + el.poster_path} alt="no poster" onClick={() => funcOnPost(el, ind)} /></li>))}
          </ul>
        </div> */}
        
      </div>)
  
  
}

export default FavoriteContent;