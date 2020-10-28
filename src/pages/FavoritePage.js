import React, {useState, useEffect} from "react";
import FavoriteContent from "../elements/favorite/FavoriteContent";


function FavoritePage(props) {
const { setFavFilmArr, favFilmArr} = props
const [openFavModal, setOpenFavModal] = useState(false)
const [filmFavData, setFilmFavData] = useState(null)
const [filmFavInd, setFilmFavInd] = useState(null)
  const [delFilm, setDelFilm] = useState(undefined) 
  const[delFromModal, setDelFromModal] = useState(false)
  
  
    
  useEffect(() => {
    if (filmFavData !== null && openFavModal === false) {
      setDelFilm(favFilmArr.find(el => (filmFavData.id === el.id)))
    }
    // if (filmFavData !== null && openFavModal === true && delFromModal === true) {
    //   setDelFilm(favFilmArr.find(el => (filmFavData.id === el.id)))
    //   setFilmFavData(favFilmArr.find(el => (filmFavData.id === el.id)))
    //   setDelFromModal(false)
    // }
    if (delFilm !== undefined) {
      let filterArr = favFilmArr.filter(el => el.id !== delFilm.id)
      setFavFilmArr(filterArr)
      localStorage.setItem("Favorite Data", JSON.stringify(favFilmArr))
    }
    // if (delFilm !== undefined &&) {
    //   let filterArr = favFilmArr.filter(el => el.id !== delFilm.id)
    //   setFavFilmArr(filterArr)
    //   localStorage.setItem("Favorite Data", JSON.stringify(favFilmArr))
    // }
    
      }, [filmFavData, delFilm, favFilmArr]);
 
  return <div>
    <FavoriteContent
      setFavFilmArr={props.setFavFilmArr}
      setOpenFavModal={setOpenFavModal}
      setFilmFavData={setFilmFavData}
      setFilmFavInd={setFilmFavInd}
      setDelFromModal={setDelFromModal}
      favFilmArr={props.favFilmArr}
      openFavModal={openFavModal}
      filmFavData={filmFavData}
      filmFavInd ={filmFavInd}
        />
    
  </div>;
}

export default FavoritePage;