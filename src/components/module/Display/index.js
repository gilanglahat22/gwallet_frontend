import React, { Fragment } from "react";
import display from "../../../assets/img/mobile.png";
import "./display.css";

const Display = () => {
  return (
    <Fragment>
      <section className="row col-xl-8 left-section d-flex flex-column d-none d-xl-block">
        <h2 className="col-xl-12 logo-desktop text-white">Gwallet</h2>
        <img
          src={display}
          alt="Display App"
          className="col-xl-12 display-app "
        />
        <h2 className="section-left-text text-white registration-text ">
          App that Covering Banking Needs.
        </h2>
        <p className="section-left-desc text-white registration-desc ">
          Gwallet is an application that focussing in banking needs for all
          users in the <br></br> world. Always updated and always following
          world trends. 5000+ users <br></br> registered in Gwallet everyday
          with worldwide users coverage.
        </p>
      </section>
    </Fragment>
  );
};

export default Display;
