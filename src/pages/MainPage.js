import React, {useState, useEffect} from "react";
import MainContent from "../elements/main/MainContent";


const api = "https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US&page="


function MainPage(props) {
const [data, setData] = useState({})
const [page, setPage] = useState(1)
const [activePage, setActivePage] = useState(1)
const [filmData, setFilmData] = useState(null)
const [isVisable, setIsVisable] = useState(false)
const [filmIndex, setFilmIndex] = useState(null)
// const [lastFilmClick, setLastFilmClick] = useState(false)

  useEffect(() => {
    fetch(`${api}${page}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.error(error));
      }, [page]);
    // console.log(data)
  
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
