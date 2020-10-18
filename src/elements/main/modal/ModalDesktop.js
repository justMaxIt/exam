import React, { useState } from "react";
import Menu from "../../menu/Menu";
import style from "./Modal.module.css"


function ModalDesktop(props) {
  const { setIsVisable
  } = props;
   

  return (<div>
    <Menu />
    <div className={style.desktop}>
      Desktop text
    </div>
    </div>
    )
}
  



export default ModalDesktop;