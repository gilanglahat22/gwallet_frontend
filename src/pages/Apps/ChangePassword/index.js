import React, { Fragment, useState } from "react";
import * as BsIcons from "react-icons/bs";
import Input from "../../../components/base/Input";
import Button from "../../../components/base/Button";
import "./changePass.css";
import { useNavigate } from "react-router-dom";
import ModalSuccess from "../../../components/module/ModalSuccess";

// redux
import { useDispatch, useSelector } from "react-redux";
import { NewPassword } from "../../../redux/actions/apps/changePassword";
import Sidebar from "../../../components/module/Sidebar";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const newPasswordData = useSelector((state) => state.NewPassword);

  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    repeatNewPassword: ""
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState({});
  const navigate = useNavigate();

  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  const handleModalSuccess = () => {
    setOpenModalSuccess(!openModalSuccess);
  };
  const handleNavigate = () => {
    setOpenModalSuccess(!openModalSuccess);
    navigate("/apps/profile");
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = (form) => {
    const errors = {};
    if (!form.currentPassword) {
      errors.currentPassword = "Password is required";
    }
    if (!form.newPassword) {
      errors.newPassword = "New Password is required";
    } else if (form.newPassword.length <= 6) {
      errors.newPassword = "Password must be more than 6 characters";
    }
    if (!form.repeatNewPassword) {
      errors.repeatNewPassword = "New Password is required";
    } else if (form.repeatNewPassword.length <= 6) {
      errors.repeatNewPassword = "Password must be more than 6 characters";
    }
    return errors;
  };

  const handleChangePassword = (resultValidate) => {
    if (Object.keys(resultValidate).length === 0) {
      dispatch(NewPassword({ form, handleModalSuccess, setErrorMessage }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultValidate = validate(form);
    setFormError(resultValidate);
    handleChangePassword(resultValidate);
  };

  const handleShowPassword = () => {
    setShowPassword(showPassword ? false : true);
  };
  return (
    <Fragment>
      <div className="small-screen-content d-lg-none animation-pull-out">
        <section className="profileContentSm d-flex flex-column justify-content-center align-items-center d-lg-none">
          <p className="changePassDescSm">
            You must enter your current password and then type your new password
            twice.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-change-pass d-flex flex-column justify-content-center align-items-center">
              <div className="input-form pass d-flex mt-5">
                <BsIcons.BsLock className="form-icons position-absolute" />
                <Input
                  name="currentPassword"
                  value={form.currentPassword}
                  onChange={handleChange}
                  className="input-change-pass"
                  placeholder="Current password"
                  type={showPassword ? "text" : "password"}
                />
                {showPassword ? (
                  <BsIcons.BsEyeSlash
                    onClick={handleShowPassword}
                    className="form-icons eye-icon-pass bi-eye-slash position-absolute"
                  />
                ) : (
                  <BsIcons.BsEye
                    onClick={handleShowPassword}
                    className="form-icons eye-icon-pass bi-eye-slash position-absolute"
                  />
                )}
              </div>
              <p className="text-error mb-0">{formError.currentPassword}</p>

              <div className="input-form pass d-flex mt-4">
                <BsIcons.BsLock className="form-icons position-absolute" />
                <Input
                  name="newPassword"
                  value={form.newPassword}
                  onChange={handleChange}
                  className="input-change-pass"
                  placeholder="New password"
                  type={showPassword ? "text" : "password"}
                />
                {showPassword ? (
                  <BsIcons.BsEyeSlash
                    onClick={handleShowPassword}
                    className="form-icons eye-icon-pass bi-eye-slash position-absolute"
                  />
                ) : (
                  <BsIcons.BsEye
                    onClick={handleShowPassword}
                    className="form-icons eye-icon-pass bi-eye-slash position-absolute"
                  />
                )}
              </div>
              <p className="text-error error-validation mb-0">
                {formError.newPassword}
              </p>

              <div className="input-form pass d-flex mt-4">
                <BsIcons.BsLock className="form-icons position-absolute" />
                <Input
                  name="repeatNewPassword"
                  value={form.repeatNewPassword}
                  onChange={handleChange}
                  className="input-change-pass"
                  placeholder="Repeat new password"
                  type={showPassword ? "text" : "password"}
                />
                {showPassword ? (
                  <BsIcons.BsEyeSlash
                    onClick={handleShowPassword}
                    className="form-icons eye-icon-pass bi-eye-slash position-absolute"
                  />
                ) : (
                  <BsIcons.BsEye
                    onClick={handleShowPassword}
                    className="form-icons eye-icon-pass bi-eye-slash position-absolute"
                  />
                )}
              </div>
              <p className="text-error mb-0">{formError.repeatNewPassword}</p>

              {errorMessage ? (
                <p className="text-error mb-0">{errorMessage}</p>
              ) : null}

              <div className="btn-change-pass d-flex align-items-center mt-0">
                <Button
                  isLoading={newPasswordData.loading}
                  className="button btn-login btn-pass"
                >
                  Change Password
                </Button>
              </div>
            </div>
          </form>
        </section>
      </div>

      <div className="big-screen-content d-none d-lg-block d-lg-flex mt-lg-2">
        <Sidebar />
        <section className="content-bar big-screen col-lg-8 animation-pull-out ">
          <section className="change-password-content d-flex flex-column">
            <div className="change-pass-text">
              <p className="change-pass-title">Change Password</p>
              <p className="change-pass-desc">
                You must enter your current password and then <br /> type your
                new password twice.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-change-pass d-flex flex-column justify-content-center align-items-center">
                <div className="input-form pass d-flex mt-5">
                  <BsIcons.BsLock className="form-icons position-absolute" />
                  <Input
                    name="currentPassword"
                    value={form.currentPassword}
                    onChange={handleChange}
                    className="input-change-pass"
                    placeholder="Current password"
                    type={showPassword ? "text" : "password"}
                  />
                  {showPassword ? (
                    <BsIcons.BsEyeSlash
                      onClick={handleShowPassword}
                      className="form-icons eye-icon-pass bi-eye-slash position-absolute"
                    />
                  ) : (
                    <BsIcons.BsEye
                      onClick={handleShowPassword}
                      className="form-icons eye-icon-pass bi-eye-slash position-absolute"
                    />
                  )}
                </div>
                <p className="text-error mb-0">{formError.currentPassword}</p>

                <div className="input-form pass d-flex mt-4">
                  <BsIcons.BsLock className="form-icons position-absolute" />
                  <Input
                    name="newPassword"
                    value={form.newPassword}
                    onChange={handleChange}
                    className="input-change-pass"
                    placeholder="New password"
                    type={showPassword ? "text" : "password"}
                  />
                  {showPassword ? (
                    <BsIcons.BsEyeSlash
                      onClick={handleShowPassword}
                      className="form-icons eye-icon-pass bi-eye-slash position-absolute"
                    />
                  ) : (
                    <BsIcons.BsEye
                      onClick={handleShowPassword}
                      className="form-icons eye-icon-pass bi-eye-slash position-absolute"
                    />
                  )}
                </div>
                <p className="text-error error-validation mb-0">
                  {formError.newPassword}
                </p>

                <div className="input-form pass d-flex mt-4">
                  <BsIcons.BsLock className="form-icons position-absolute" />
                  <Input
                    name="repeatNewPassword"
                    value={form.repeatNewPassword}
                    onChange={handleChange}
                    className="input-change-pass"
                    placeholder="Repeat new password"
                    type={showPassword ? "text" : "password"}
                  />
                  {showPassword ? (
                    <BsIcons.BsEyeSlash
                      onClick={handleShowPassword}
                      className="form-icons eye-icon-pass bi-eye-slash position-absolute"
                    />
                  ) : (
                    <BsIcons.BsEye
                      onClick={handleShowPassword}
                      className="form-icons eye-icon-pass bi-eye-slash position-absolute"
                    />
                  )}
                </div>
                <p className="text-error mb-0">{formError.repeatNewPassword}</p>

                {errorMessage ? (
                  <p className="text-error mb-0">{errorMessage}</p>
                ) : null}

                <div className="btn-change-pass d-flex align-items-center mt-0">
                  <Button
                    isLoading={newPasswordData.loading}
                    className="button btn-login btn-pass"
                  >
                    Change Password
                  </Button>
                </div>
              </div>
            </form>
          </section>
        </section>
      </div>

      {openModalSuccess ? (
        <ModalSuccess
          successTitle="Change Password Success!"
          successDesc="Since your password has been changed, make sure to remember the new one!"
          action="Go back to Profile"
          closeModal={handleNavigate}
        />
      ) : null}
    </Fragment>
  );
};

export default ChangePassword;
