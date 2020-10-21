import React, {useState, useEffect} from "react";
import MainContent from "../elements/main/MainContent";
import { Store } from "./Store";


const api = "https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US&page="



function MainPage(props) {
const [data, setData] = useState({});
const [page, setPage] = useState(1)
const [activePage, setActivePage] = useState(1);
 const [filmData, setFilmData] = useState(null)
  const [isVisable, setIsVisable] = useState(false)
  const [filmIndex, setFilmIndex] = useState(null)

  useEffect(() => {
      if (filmIndex === 20) {
      setPage(page + 1);
      setFilmIndex(0);
      setFilmData(data[0]);
      setActivePage(activePage + 1)
    }

    fetch(`${api}${page}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.error(error));
    
  
  }, [page, activePage, filmIndex]);
  
  

console.log(data)
  return <div className="main-page">
      <MainContent
      data={data}
      activePage={activePage}
      setActivePage={setActivePage}
      setPage={setPage}
      page={page}
      filmData={filmData}
setFilmData={setFilmData}
isVisable={isVisable}
      setIsVisable={setIsVisable}
      filmIndex={filmIndex}
      setFilmIndex={setFilmIndex}
    />
  </div>;
}

export default MainPage;
