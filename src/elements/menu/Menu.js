import React from "react";
import style from "./Menu.module.css"
import deathstar from "./deathstar.png"
import { Link } from "react-router-dom"


function Menu() {

    return(
  <div className={style.menu}>
      <div className={style.leftMenuItem}>
        
          <img src={deathstar} alt="deathstar" />
        <h5>Movies</h5>
      </div>
      <div className={style.rightMenuItem}>
       <div class="btn-group">
  <button type="button"   class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style = {{
   border: "1px solid white"
 }}>
   <span className={style.articleDDMenu}>My Account</span>
  </button>
  <div class="dropdown-menu dropdown-menu-right">
    <Link to="/" class="dropdown-item">My Account</Link>
    <Link to="/favorite" class="dropdown-item">My Favorite</Link>
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
      /* <Link
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
      </Link> */
   
 
}

export default Menu;
