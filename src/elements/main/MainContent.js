import React  from "react";
import style from "./Main.module.css"
import Pagination from "react-js-pagination";
import Modal from "../modal/Modal";
import Menu from "../menu/Menu";


const posterUrl = "http://image.tmdb.org/t/p/w200"

function MainContent(props) {
  
const {setPage, activePage, setActivePage, data, page, 
setFilmData, isVisable, setIsVisable,  setFilmIndex} = props
 

  // console.log(data)

  
  let funcOnPost = (el, ind) => {
    if (ind === 19) {
      setPage(page+1)
    }
    if(ind <= 19) {
      setFilmData(el)
      setIsVisable(true)
      setFilmIndex(ind)}
}

  if (isVisable) {
      return (
      <div className={style.modal}>
        <Modal
        state={props}
      /> </div>)
  }
   else {
    return (
      <div>
        <Menu />
      <div className={style.page}>
      
        <div className={style.articleContent}>
          <h4>Latest Releases</h4>
        </div>
        <div>
          <ul className={style.postersContent}>
            {props.data.results?.map((el, ind) =>
              (<li key={el.id} >
                <img src={posterUrl + el.poster_path}  alt={`Title: ${el.title}`} onClick={() => funcOnPost(el, ind)} /></li>))}
          </ul>
        </div>
      
        <div className={style.pagination}>
          <Pagination
              hideDisabled
              itemClass="page-item"
              linkClass="page-link"
              prevPageText='prev'
              nextPageText='next'
              firstPageText='first'
              lastPageText='last'
              activePage={activePage}
              itemsCountPerPage={1}
              totalItemsCount={data.total_pages}
              pageRangeDisplayed={3}
              onChange={(page) => {
      
                setPage(page)
                setActivePage(page)
              }} />
        </div>
     
   
   </div>
      </div>)
  }
  
}

export default MainContent;