import React, {useState, useEffect} from "react";
import FavoriteContent from "../elements/favorite/FavoriteContent";


function FavoritePage(props) {
const [openFavModal, setOpenFavModal] = useState(false)
const [filmFavData, setFilmFavData] = useState(null)
const [filmFavIndex, setFilmFavIndex] = useState(null)

  
  
 
  return <div>
    <FavoriteContent
      setFavFilmArr={props.setFavFilmArr}
      setOpenFavModal={setOpenFavModal}
      setFilmFavData={setFilmFavData}
      setFilmFavIndex={setFilmFavIndex}
      favFilmArr={props.favFilmArr}
      openFavModal={openFavModal}
      filmFavData={filmFavData}
      filmFavIndex={filmFavIndex}
    />
    
  </div>;
}

export default FavoritePage;