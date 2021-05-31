import React, { useState } from "react";
import {
  Jumbotron,
  Button
} from "reactstrap";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Main from "./Main.js";
import Semua from './Semua';
import Pandit from './Pandit';
import Bolacom from './Bolacom';
import datapandit from './datapandit';
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const employeeData = {
    menu: 'Semua',
  };
  

  const reducer = (state = employeeData, action) => {
    switch (action.type) {
      case "semua":
        return {menu: 'Semua'}
      case "pandit":
        return { menu: "PanditFootball.com" };

      case "bolacom":
        return { menu: "Bola.com" };

      default:
        return state;
    }
  };
  const store = createStore(reducer);
  return (
    <BrowserRouter>
    <div>
    <div className="container">
      <Jumbotron className="my-5">
        <h1 className="display-3">Welcome to Gila Bola</h1>
        <p className="lead">
          Website bola paling interaktif yang pernah ada.
        </p>
        <hr className="my-2" />
        <p>
          Kami menyediakan konten-konten scrapping dari website bola terkemuka.
        </p>
      </Jumbotron>

      <Provider store={store}>
        <Main></Main>
      </Provider>
      <Route path="/" exact={true} component={Semua}/>
      <Route path="/pandit" component={Pandit}/>
      <Route path="/bolacom" component={Bolacom}/>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
