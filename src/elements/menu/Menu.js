import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./Menu.module.css"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


function Menu() {
  return(
  <div className={style.menu}>
      <div>menu</div>
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
  </div>)
  // let location = useLocation();

  // return (
  //   <div className="menu">
  //     <Link className={location.pathname === "/" ? "active" : ""} to="/">
  //       Main
  //     </Link>
      {/* <Link
        className={location.pathname === "/modal" ? "active" : ""}
        to="/modal"
      >
        Modal
      </Link>
      <Link
        className={location.pathname === "/favorite" ? "active" : ""}
        to="/favorite"
      >
        Favorite
      </Link> */}
   
 
}

export default Menu;
