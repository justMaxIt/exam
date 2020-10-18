import React, { useState, useEffect } from "react";
import ModalDesktop from "./ModalDesktop";
import ModalMobile from "./ModalMobile";

// function Modal() {
// const [widthModal, setWidthModal] = React.useState(window.innerWidth);
// const breakpoint = 620;
//   React.useEffect(() => {
//         window.addEventListener("resize", () => setWidthModal(window.innerWidth));
//   }, []);
//   return (widthModal < breakpoint ? <ModalMobile /> : <ModalDesktop />)}
  
export const useViewport = () => {
const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return { width };}

const Modal = (props) => {
  const { setIsVisable, setFilmData, setFilmIndex, data, filmData, FilmIndex } = props;
  const { width } = useViewport();
  const breakpoint = 620;

  return (width < breakpoint ?
    <ModalMobile
      setIsVisable={props.setIsVisable}
      setFilmData={props.setFilmData}
      setFilmIndex={props.setFilmIndex}
      data={props.data}
      FilmIndex={props.FilmIndex}
        filmData={props.filmData}
    /> :
    <ModalDesktop
      setIsVisable={props.setIsVisable}
      setFilmData={props.setFilmData}
      setFilmIndex={props.setFilmIndex}
      data={props.data}
      FilmIndex={props.FilmIndex}
        filmData={props.filmData}
    />);
}

export default Modal;