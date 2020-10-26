import React from "react";
import style from "./../modal/Modal.module.css"
import {useViewport} from "./../modal/Modal"


  



const ModalFav = (props) => {
  const { width } = useViewport();
  const breakpoint = 620;

  return (<div>
  {    width < breakpoint ?
  <div>
      <div className={style.modCont}>
        nerrou
       </div>
    </div> :
    <div>fullscreen</div>
  
   }</div>)
}

export default ModalFav;