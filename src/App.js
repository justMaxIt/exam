import React, {useState, useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./elements/menu/Menu";
import MainPage from "./pages/MainPage";
import FavoritePage from "./pages/FavoritePage";
// import ModalPage from "./pages/ModalPage";

function App() {
  const [favFilmArr, setFavFilmArr] = useState([])

  useEffect(() => {
      if (favFilmArr.length === 0) { setFavFilmArr(JSON.parse(localStorage.getItem("Favorite Data")))}
      }, [favFilmArr])

  return (
      <Router>
      <Switch>
        <Route exact path="/">
          <MainPage
            favFilmArr={favFilmArr}
            setFavFilmArr={setFavFilmArr} />
        </Route>
        <Route path="/favorite">
          <Menu />
          <FavoritePage
          favFilmArr={favFilmArr}
          setFavFilmArr={setFavFilmArr}
          />
        </Route>
        <Route path="*">
                    <div>Path error: 404</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
