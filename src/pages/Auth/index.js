import React, { Fragment } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import display from "../../assets/img/BNMO.png";
import "./auth.css";

const Auth = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  if (token) {
    return <Navigate to={"/apps"} />;
  }
  return (
    <Fragment>
      <main className="container-fluid d-flex">
        <section className="row col-xl-8 left-section d-flex flex-column d-none d-xl-block">
          <h2
            onClick={() => navigate("/")}
            className="col-xl-12 logo-desktop text-#2bafa4"
          >
            Gwallet
          </h2>
          <img
            src={display}
            alt="Display App"
            className="col-xl-12 display-app "
          />
          <h2 className="section-left-text registration-text text-#2bafa4;">
            App that Covering Banking Needs.
          </h2>
          <p className="section-left-desc text-black registration-desc ">
            Gwallet is an fintech application that focussing in banking needs for all
            users in the <br></br> world. Always updated and always following
            world trends. 10000+ users <br></br> registered in Gwallet everyday
            with worldwide users coverage.
          </p>
        </section>

        <Outlet />
      </main>
    </Fragment>
  );
};

export default Auth;
