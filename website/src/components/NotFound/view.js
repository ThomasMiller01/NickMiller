import React from "react";

import Header from "../header/view";
import Footer from "../footer/view";

import "./style.scss";
import { NavLink } from "react-router-dom";

const NotFoundView = ({ props }) => {
  console.log(props);
  return (
    <React.Fragment>
      <Header />
      <div className="notfound-view">
        <div className="text">
          <h1>HTTP 404</h1>
          <h1>Seite wurde nicht gefunden</h1>
          <p>Die gewünschte Seite konnte leider nicht gefunden werden.</p>
          <p>
            Gehe zurück zur <NavLink to="/">Startseite</NavLink>.
          </p>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default NotFoundView;
