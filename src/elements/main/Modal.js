import React, { useState } from "react";
import Menu from "../menu/Menu";
import style from "./Modal.module.css"


function Modal(props) {
  const { setIsVisable
  } = props;
  
   

  return (
    <div>
      <Menu />
      <div className={style.modalContent}>
        Text MODAL
         
         
     </div> </div>)
  

}

export default Modal;