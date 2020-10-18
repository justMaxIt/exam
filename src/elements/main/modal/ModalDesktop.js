import React, { useState } from "react";
import Menu from "../../menu/Menu";
import style from "./Modal.module.css"


function ModalDesktop(props) {
const { setIsVisable, setFilmData,setFilmIndex, data, filmData, FilmIndex } = props;
   

  return (<div>
    <Menu />
    <div className={style.desktop}>
      <button onClick={() => setIsVisable(false)}>Back to list</button>
      <button onClick={() => {
        if (FilmIndex <= 18) {
          setFilmIndex(FilmIndex + 1);
          setFilmData(data[FilmIndex + 1])
        }
      }}>Next Movie</button>
      gtfstghrshdfh
    </div>
    </div>
    )
}
  



export default ModalDesktop;