import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/base/Button";
import * as BsIcons from "react-icons/bs";

const CreatePINSuccess = () => {
  const navigate = useNavigate();
  const toCreatePINPage = () => {
    navigate("/auth/login");
  };
  return (
    <Fragment>
      <section className="row col-xl-4 right-section animation-pull-out">
        <div className="col-md-12 col-xl-12 ">
          <BsIcons.BsCheckCircleFill className="success-icon d-none d-md-block text-green mt-5" />

          <h2 className="section-right-text d-none d-md-block registration-text">
            Your PIN Was Successfully Created
          </h2>
          <p className="section-right-desc d-none d-md-block registration-desc">
            Your PIN was successfully created and you can now access all the
            features in Gwallet. Login to your new account and start exploring!
          </p>
        </div>

        {/* <!-- layout mobile version --> */}
        <div className="col-12 right-section-header d-md-none">
          <h1
            onClick={() => navigate("/")}
            className="logo text-blue text-center"
          >
            Gwallet
          </h1>
        </div>

        <div className="col-12 right-section-content text-center ">
          <BsIcons.BsCheckCircleFill className="success-icon d-md-none text-green mt-5" />
          <h2 className="login-title d-md-none">Create PIN Success!</h2>
          <p className="login-desc d-md-none">
            Congrats! Your PIN was successfully created. <br></br> Now you can
            Login to your account and start exploring Gwallet!
          </p>

          <Button onClick={toCreatePINPage} className="button btn-login">
            Login Now
          </Button>
        </div>
      </section>
    </Fragment>
  );
};

export default CreatePINSuccess;
