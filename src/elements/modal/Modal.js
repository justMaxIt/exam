import React, {useState, useEffect} from "react";
import ModalDesktop from "./ModalDesktop";
import ModalMobile from "./ModalMobile";


  export const useViewport = () => {
const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return { width };}

const Modal = (props) => {
  const { width } = useViewport();
  const breakpoint = 620;
 
  return (<div>
       
    {width < breakpoint ?
      <ModalMobile
        //  setIsVisable={props.setIsVisable}
        // setFilmData={props.setFilmData}
        //   setFilmIndex={props.setFilmIndex}
        //   setActivePage={props.setActivePage}
        //   setPage={props.setPage}
        //   data={props.data}
        //   page={props.page}
        //   activePage={props.activePage}
        // filmIndex={props.filmIndex}
        // filmData={props.filmData}
          state={props.state}
          // setFavFilmArr={setFavFilmArr}
          // favFilmArr={favFilmArr}

  
      /> :
      <ModalDesktop
        // setIsVisable={props.setIsVisable}
        // setFilmData={props.setFilmData}
        //   setFilmIndex={props.setFilmIndex}
        //   setActivePage={props.setActivePage}
        //   setPage={props.setPage}
        //   data={props.data}
        //   page={props.page}
        //   activePage={props.activePage}
        // filmIndex={props.filmIndex}
        //   filmData={props.filmData}
          state={props.state}
          //    setFavFilmArr={setFavFilmArr}
          // favFilmArr={favFilmArr}
             />}
  </div>
   );
}

export default Modal;