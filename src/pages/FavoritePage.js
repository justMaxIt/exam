import React, {useState, useEffect} from "react";
import FavoriteContent from "../elements/favorite/FavoriteContent";


const api = "https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US&page="


function FavoritePage(props) {
const [data, setData] = useState({})
const [page, setPage] = useState(1)
const [activePage, setActivePage] = useState(1)
  
  
const [dataFav, setDataFav] = useState(null) 
const [filmData, setFilmData] = useState(null)
const [isVisable, setIsVisable] = useState(false)
const [filmIndex, setFilmIndex] = useState(null)
// const [lastFilmClick, setLastFilmClick] = useState(false)

  useEffect(() => {
    if (dataFav === null) { setDataFav(JSON.parse(localStorage.getItem("Favorite Data"))) };
  
    // fetch(`${api}${page}`)
    //   .then((res) => res.json())
    //   .then((res) => setData(res))
    //   .catch((error) => console.error(error));
      }, [dataFav]);
    console.log(dataFav)
 
  return <div>
      <FavoriteContent />
    
  </div>;
}

export default FavoritePage;