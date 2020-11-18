import React from "react";
import style from "./Menu.module.css";
import deathstar from "./../../img/deathstar.png";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className={style.menu}>
      <div className={style.leftMenuItem}>
        <Link to="/" className={style.logoLink}>
          <img src={deathstar} alt="deathstar" />
        </Link>
        <Link to="/" className={style.logoLink}>
          <h5>Movies</h5>
        </Link>
      </div>

      <div className={style.rightMenuItem}>
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-secondary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{
              border: "1px solid white",
            }}
          >
            <span className={style.articleDDMenu}>My Account</span>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <Link to="/" class="dropdown-item">
              My Account
            </Link>
            <Link to="/favorite" class="dropdown-item">
              My Favorite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
