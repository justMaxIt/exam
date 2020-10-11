import { map } from "jquery";
import React, {useState, useEffect} from "react";

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
  return <div className="main-content">
   
    <div>
      Latest Releases
    </div>
    <div>
     
        
    
      <a href="#"><ul>{posterPath.map(el => <li><img src={el} alt="img" /></li>)} </ul></a>


    </div>
    
    
    </div>;
}

export default MainContent;