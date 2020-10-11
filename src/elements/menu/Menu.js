import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./Menu.module.css"
import starship from "./starship.png"


function Menu() {
  return(
  <div className={style.menu}>
      <div className={style.leftMenuItem}>
        {/* <div className={style.starship}> */}
          <img src={starship} alt="starship" />
        <h5>Movies</h5>
      </div>
      <div className={style.rightMenuItem}>
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"style={{
        border: "1px solid white"
      }}>
    My account
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else</a>
  </div>
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
