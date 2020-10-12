import React, { useState, useEffect  } from "react";
import style from "./Main.module.css"
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";

const api = "https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US&page="
const posterUrl = "http://image.tmdb.org/t/p/w200" 

function MainContent() {
const [data, setData] = useState([]);
const [page, setPage] = useState(1)
const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    fetch(`${api}${page}`)
      .then((res) => res.json())
      .then((res) => setData(res.results))
      .catch((error) => console.error(error));
  }, [page]);
  
  let posterPath = data?.map(el => posterUrl + el.poster_path)

  // console.log(data, posterPath)
  return <div className={style.mainContent}>
       <div className={style.articleContent}>
      <h4>Latest Releases</h4>
    </div>
    <div>
     <a  href="#"><ul className={style.postersContent}>{posterPath.map(el => <li><img src={el} alt="img" /></li>)} </ul></a>
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
       </div>;
}
ReactDOM.render(<Pagination />, document.getElementById("root"));
export default MainContent;