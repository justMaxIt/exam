import React, {useState, useEffect} from "react";
import FavoriteContent from "../elements/favorite/FavoriteContent";


function FavoritePage(props) {
const [openFavModal, setOpenFavModal] = useState(false)
const [filmFavData, setFilmFavData] = useState(null)
const [filmfavIndex, setFilmFavIndex] = useState(null)
// const [data, setData] = useState({})
// const [page, setPage] = useState(1)
// const [activePage, setActivePage] = useState(1)
  
// const { setFavFilmArr, favFilmArr} = props
// const [dataFav, setDataFav] = useState(null) 



  // useEffect(() => {
  //   if (dataFav === null) { setDataFav(JSON.parse(localStorage.getItem("Favorite Data"))) };

  //         }, [dataFav]);
  //   console.log(favFilmArr )
 
  return <div>
    <FavoriteContent
      setFavFilmArr={props.setFavFilmArr}
      setOpenFavModal={setOpenFavModal}
      setFilmFavData={setFilmFavData}
      setFilmFavIndex={setFilmFavIndex}
      favFilmArr={props.favFilmArr}
      openFavModal={openFavModal}
      filmFavData={filmFavData}
      filmfavIndex={filmfavIndex}

    />
    
  </div>;
}

export default FavoritePage;