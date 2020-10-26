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
       state={props.state}
      /> :
      <ModalDesktop
      state={props.state}
      />}
  </div>
   );
}

export default Modal;