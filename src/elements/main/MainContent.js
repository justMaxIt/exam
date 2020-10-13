import React from "react";
import style from "./Main.module.css"
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";
import { NavLink } from "react-router-dom";



function MainContent(props) {
  let { data, setPage, activePage, setActivePage} = props

  const posterUrl = "http://image.tmdb.org/t/p/w200"
  // let posterPath = data?.map(el => posterUrl + el.poster_path)
  let linkId=data?.map(el => el.id)
  // console.log(data, linkId)
  let alert = () => {
    console.log("help")
  }

  return (
  
    <div className={style.mainContent}>
      
       <div className={style.articleContent}>
      <h4>Latest Releases</h4>
    </div>
    <div>
    
        <NavLink to="/modal" >
          <ul className={style.postersContent}>
            {data.map((el) =>
              (<li key={el.id}>
                <img src={posterUrl + el.poster_path} alt="no poster" onClick={alert} /></li>))}
          </ul>
          
        </NavLink>
        
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
        }}    />
     </div>
    </div>)
  
}
ReactDOM.render(<Pagination />, document.getElementById("root"));
export default MainContent;