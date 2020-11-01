import React, { useState, useEffect } from "react";
import ModalDesktop from "./ModalDesktop";
import ModalMobile from "./ModalMobile";

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

  const newDate = new Date(Date.parse(filmData.release_date));
  const year = newDate.getFullYear();
  function convertDate(date) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "Jule",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return (
      months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
    );
  }
  const date = convertDate(newDate);

  useEffect(() => {
    if (condition) {
      favFilmArr.push(filmData);
      setFavFilmArr(favFilmArr);
      localStorage.setItem("Favorite Data", JSON.stringify(favFilmArr));
      setCondition(false);
    }
  }, [condition, favFilmArr, filmData, setFavFilmArr]);

  return (
    <div>
      {width < breakpoint ? (
        <ModalMobile
          state={props.state}
          setCondition={setCondition}
          year={year}
          date={date}
        />
      ) : (
        <ModalDesktop
          state={props.state}
          setCondition={setCondition}
          year={year}
          date={date}
        />
      )}
    </div>
  );
};

export default Modal;
