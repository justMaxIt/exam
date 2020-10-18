import React, { useState } from "react";
import style from "./Main.module.css"
import Pagination from "react-js-pagination";
import Modal from "./modal/Modal";
import Menu from "../menu/Menu";




const posterUrl = "http://image.tmdb.org/t/p/w200"

function MainContent(props) {
let { data, setPage, activePage, setActivePage } = props
  const [filmData, setFilmData] = useState(null)
  const [isVisable, setIsVisable] = useState(false)
  const [FilmIndex, setFilmIndex] = useState(null)
  // let posterPath = data?.map(el => posterUrl + el.poster_path)
  // let linkId=data?.map(el => el.id)
  // console.log(data, linkId)

  
  let funcOnPost = (el, ind) => {

    setFilmData(el)
    setIsVisable(true)
    setFilmIndex(ind)
}
console.log(filmData, FilmIndex)
  
  if (isVisable) {
   

    return (
      <div className={style.modal}>
        <Modal
          setFilmIndex={setFilmIndex}
          setIsVisable={setIsVisable}
          setFilmData={setFilmData}
          data={props.data}
          filmData={filmData}
        FilmIndex={FilmIndex}
        /> </div>)
  }
   else {
    return (
      <div>
        <Menu />
      <div className={style.mainContent}>
      
        <div className={style.articleContent}>
          <h4>Latest Releases</h4>
        </div>
        <div>
          <ul className={style.postersContent}>
            {data.map((el, ind) =>
              (<li key={el.id} >
                <img src={posterUrl + el.poster_path} alt="no poster" onClick={() => funcOnPost(el, ind)} /></li>))}
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
            totalItemsCount={64}
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