import React, { Fragment } from "react";
import "./footer.css";

const Footer = () => {
  return (
    <Fragment>
      <footer className="col-md-12 footer-content d-none d-md-block d-md-flex flex-row justify-content-between mb-0">
        <p className="copyright">2022 Gwallet. All right reserved.</p>
        <div className="contact d-md-flex flex-row">
          <p>+62 823 8221 1182</p>
          <p>13520137@std.stei.itb.ac.id</p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
