import React, { useState, useEffect } from "react";
import ModalDesktop from "./ModalDesktop";
import ModalMobile from "./ModalMobile";

function Modal() {
const [widthModal, setWidthModal] = React.useState(window.innerWidth);
const breakpoint = 620;

  React.useEffect(() => {
        window.addEventListener("resize", () => setWidthModal(window.innerWidth));
  }, []);


  return (widthModal < breakpoint ? <ModalMobile /> : <ModalDesktop />)}
  



export default Modal;