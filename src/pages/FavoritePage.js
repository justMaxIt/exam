import React, {useState, useEffect} from "react";
import FavoriteContent from "../elements/favorite/FavoriteContent";


function FavoritePage(props) {
const [openFavModal, setOpenFavModal] = useState(false)

// const [data, setData] = useState({})
// const [page, setPage] = useState(1)
// const [activePage, setActivePage] = useState(1)
  
// const { setFavFilmArr, favFilmArr} = props
// const [dataFav, setDataFav] = useState(null) 
// const [filmData, setFilmData] = useState(null)

// const [filmIndex, setFilmIndex] = useState(null)


  // useEffect(() => {
  //   if (dataFav === null) { setDataFav(JSON.parse(localStorage.getItem("Favorite Data"))) };

  //         }, [dataFav]);
  //   console.log(favFilmArr )
 
  return <div>
    <FavoriteContent
      setOpenFavModal={setOpenFavModal}
      setFavFilmArr={props.setFavFilmArr}
      favFilmArr={props.favFilmArr}
      openFavModal={openFavModal}
   
    
    />
    
  </div>;
}

export default FavoritePage;