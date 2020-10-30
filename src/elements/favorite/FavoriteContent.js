import React from "react";
import Menu from "../menu/Menu";
import style from "./../main/Main.module.css";
import ModalFav from "./ModalFav";

const posterUrl = "http://image.tmdb.org/t/p/w200";

function FavoriteContent(props) {
  const {
    setOpenFavModal,
    setFilmFavData,
    setFilmFavInd,
    openFavModal,
  } = props;

  let openModal = (el, ind) => {
    // eslint-disable-next-line
    return setOpenFavModal(true), setFilmFavData(el), setFilmFavInd(ind);
  };

  return (
    <div>
      {openFavModal ? (
        <ModalFav state={props} />
      ) : (
        <div className={style.pageBackgroundFav}>
          <Menu />
          <div className={style.page}>
            <div className={style.articleContent}>
              <h4>My favorite</h4>
            </div>

            <div>
              <ul className={style.favContent}>
                {props.favFilmArr?.map((el, ind) => (
                  <li key={el.id}>
                    <div className={style.favData}>
                      <div className={style.favImg}>
                        {el.poster_path ? (
                          <div
                            className={style.wrapPost}
                            onClick={() => openModal(el, ind)}
                          >
                            <img src={posterUrl + el.poster_path} alt="img" />
                            <span>
                              <h4>{el.title}</h4>
                            </span>
                          </div>
                        ) : (
                          <div
                            className={style.noPoster}
                            onClick={() => openModal(el, ind)}
                          >
                            <span>
                              <h4>{el.title}</h4>
                            </span>
                          </div>
                        )}
                      </div>

                      <div className={style.favBox}>
                        <div className={style.favBoxTop}>
                          <div className={style.favBoxTitle}>{el.title}</div>
                          <div className={style.favBoxButton}>
                            <button
                              onClick={() => {
                                setFilmFavData(el);
                              }}
                            >
                              Unfavorite
                            </button>
                          </div>
                        </div>
                        <div className={style.favBoxDescription}>
                          {el.overview}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FavoriteContent;
