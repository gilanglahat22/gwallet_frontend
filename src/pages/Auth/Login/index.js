import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import Button from "../../../components/base/Button";
import Input from "../../../components/base/Input";
import "./login.css";

// redux
import { useDispatch, useSelector } from "react-redux";
import { AuthLogin } from "../../../redux/actions/auth/authLogin";

const Login = () => {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.AuthLogin);

  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [formError, setFormError] = useState({});
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(showPassword ? false : true);
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const validate = (form) => {
    const errors = {};
    if (!form.email) {
      errors.email = "Email is required";
    }
    if (!form.password) {
      errors.password = "Password is required";
    }
    return errors;
  };
  const handleLogin = (resultValidate) => {
    if (Object.keys(resultValidate).length === 0) {
      dispatch(AuthLogin({ form, navigate, setErrorMessage }));
    }
  };
  const handleClick = () => {
    const resultValidate = validate(form);
    setFormError(resultValidate);
    handleLogin(resultValidate);
  };
  const toSignUpPage = () => {
    navigate("/auth/signup");
  };
  const toResetPassPage = () => {
    navigate("/auth/password/confirmation");
  };
  return (
    <Fragment>
      <section className="row col-xl-4 right-section">
        <div className="col-md-12 col-xl-12">
          <h2 className="section-right-text d-none d-md-block registration-text">
            Start Accessing Banking Needs <br></br> With All Devices and All
            Platforms With 30.000+ Users.
          </h2>
          <p className="section-right-desc d-none d-md-block registration-desc">
            Transfering money is eassier than ever, you can access Gwallet
            wherever you are. Desktop, laptop, mobile phone? We cover all of
            that for you!
          </p>
        </div>

        {/* <!-- layout mobile version --> */}
        <div className="col-12 right-section-header d-md-none">
          <h1
            onClick={() => navigate("/")}
            className="logo text-#2bafa4 text-center"
          >
            Gwallet
          </h1>
        </div>

        <div className="col-12 right-section-content text-center animation-pull-out">
          <h2 className="login-title d-md-none">Login</h2>
          <p className="login-desc d-md-none">
            Login to your existing account to access all the great features in
            Gwallet. <br /> Top Up your Balance and Transfer to your friends!
          </p>
          {/* <!-- input form start here--> */}
          <div className="input-form d-flex mt-5 ">
            <BsIcons.BsEnvelope className="form-icons position-absolute" />
            <Input
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your e-mail"
              type="email"
              name="email"
              id="mail"
            />
          </div>
          <p className="text-error  mb-0">{formError.email}</p>

          <div className="input-form d-flex mt-5">
            <BsIcons.BsLock className="form-icons position-absolute" />
            <Input
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              name="password"
              id="pass"
            />
            {showPassword ? (
              <BsIcons.BsEyeSlash
                onClick={handleShowPassword}
                className="form-icons bi-eye-slash position-absolute"
              />
            ) : (
              <BsIcons.BsEye
                onClick={handleShowPassword}
                className="form-icons bi-eye-slash position-absolute"
              />
            )}
          </div>
          <p className="text-error  mb-0">{formError.password}</p>
          {errorMessage ? (
            <p className="text-error mb-0">{errorMessage}</p>
          ) : null}

          <div className="d-flex justify-content-end mt-1">
            <p className="forgot mt-2 me-2" onClick={toResetPassPage}>
              Forgot Password?
            </p>
          </div>

          <Button
            isLoading={loginData.loading}
            onClick={handleClick}
            className="button btn-login mb-1"
          >
            Login
          </Button>
          {/* <!-- input form end here --> */}

          <p className="create mt-5 ">
            Don't have an account? Let's{" "}
            <span className="create-account text-green" onClick={toSignUpPage}>
              {" "}
              Sign Up
            </span>
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
