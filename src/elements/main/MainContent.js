import React, { useState, useEffect } from "react";
import style from "./Main.module.css"

const api = "https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US&page="
const posterUrl = "http://image.tmdb.org/t/p/w200" 

function MainContent() {
const [data, setData] = useState([]);
const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(`${api}${page}`)
      .then((res) => res.json())
      .then((res) => setData(res.results))
      .catch((error) => console.error(error));
  }, [page]);
  
  let posterPath = data?.map(el => posterUrl + el.poster_path)


  console.log(data, posterPath)
  return <div className={style.mainContent}>
   
    <div className={style.articleContent}>
      <h4>Latest Releases</h4>
    </div>
    <div>
     
        
    
      <a  href="#"><ul className={style.postersContent}>{posterPath.map(el => <li><img src={el} alt="img" /></li>)} </ul></a>


    </div>
    <div>Pagination</div>
    
    </div>;
}

export default MainContent;