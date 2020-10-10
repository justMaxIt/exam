import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./elements/menu/Menu";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Menu />
          <MainPage />
        </Route>
        {/* <Route path="/modal">
          <Menu />
          <ModalPage />
        </Route>
        <Route path="/favorite">
          <Menu />
          <FavoritePage />
        </Route> */}
        <Route path="*">
          <Menu />
          <div>Path error: 404</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
