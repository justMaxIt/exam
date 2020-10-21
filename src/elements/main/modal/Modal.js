import React, { useState, useEffect } from "react";
import ModalDesktop from "./ModalDesktop";
import ModalMobile from "./ModalMobile";
import style from "./Modal.module.css"
// function Modal() {
// const [widthModal, setWidthModal] = React.useState(window.innerWidth);
// const breakpoint = 620;
//   React.useEffect(() => {
//         window.addEventListener("resize", () => setWidthModal(window.innerWidth));
//   }, []);
//   return (widthModal < breakpoint ? <ModalMobile /> : <ModalDesktop />)}
  const posterUrl = "http://image.tmdb.org/t/p/w400"
  
export const useViewport = () => {
const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return { width };}



const Modal = (props) => {
  const { setIsVisable, setFilmData, setFilmIndex, setActivePage, setPage, data, page, activePage, filmData, filmIndex } = props;
  const { width } = useViewport();
  const breakpoint = 620;
  // const backgroundImage = posterUrl + filmData.poster_path


  return (<div
    // className={style.backgroundImage} style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className={style.backgroundImageBlur}></div>
    <div className={style.modCont}>
     
    {width < breakpoint ?
      <ModalMobile
        setIsVisable={props.setIsVisable}
        setFilmData={props.setFilmData}
        setFilmIndex={props.setFilmIndex}
        data={props.data}
        filmIndex={props.filmIndex}
        filmData={props.filmData}
      /> :
      <ModalDesktop
        setIsVisable={props.setIsVisable}
        setFilmData={props.setFilmData}
          setFilmIndex={props.setFilmIndex}
          setActivePage={props.setActivePage}
          setPage={props.setPage}
          data={props.data}
          page={props.page}
          activePage={props.activePage}
        filmIndex={props.filmIndex}
        filmData={props.filmData}
      />}
  </div></div>
   );
}

export default Modal;