import React, { useState, useEffect } from "react";
import ModalDesktop from "./ModalDesktop";
import ModalMobile from "./ModalMobile";
import style from "./Modal.module.css";

export const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return { width };
};

const Modal = (props) => {
  const { setFavFilmArr, filmData, favFilmArr } = props.state;
  const [condition, setCondition] = useState(false);
  const { width } = useViewport();
  const breakpoint = 620;

  useEffect(() => {
    if (condition) {
      favFilmArr.push(filmData);
      setFavFilmArr(favFilmArr);
      localStorage.setItem("Favorite Data", JSON.stringify(favFilmArr));
      style.visibility = "hidden";
      setCondition(false);
    }
  }, [condition, favFilmArr, filmData, setFavFilmArr]);

  return (
    <div>
      {width < breakpoint ? (
        <ModalMobile state={props.state} setCondition={setCondition} />
      ) : (
        <ModalDesktop state={props.state} setCondition={setCondition} />
      )}
    </div>
  );
};

export default Modal;
