import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/base/Input";
import Button from "../../../components/base/Button";
import * as BsIcons from "react-icons/bs";
import "./topup.css";

// redux
import { useDispatch, useSelector } from "react-redux";
import { TopupMethod } from "../../../redux/actions/apps/topupMethod";
import Sidebar from "../../../components/module/Sidebar";

const TopUp = () => {
  const dispatch = useDispatch();
  const topupMethodData = useSelector((state) => state.TopupMethod);

  const [topUpMethod, setTopUpMethod] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTopUpMethod(e.target.value);
  };
  const handleClick = () => {
    dispatch(TopupMethod({ topUpMethod, navigate }));
  };

  return (
    <Fragment>
      <div className="small-screen-content d-lg-none animation-pull-out">
        <section className="profileContentSm d-flex flex-column justify-content-center align-items-center d-lg-none">
          <p className="topup-input-desc ">
            Choose topup method below and then press Continue button. Due to
            several reasons we recommend you to choose
            <strong> Instant Top Up/Cash </strong> method.
          </p>

          <div className="topup-method-form mt-3 d-flex flex-column flex-wrap d-flex justify-content-center align-items-center">
            <div className="topup-method-wrapper ">
              <label htmlFor="virtual-account" className="topup-method">
                <Input
                  value="Virtual Account"
                  onChange={handleChange}
                  checked={topUpMethod === "Virtual Account"}
                  type="radio"
                  name="topUpMethod"
                  id="virtual-account"
                  className="topup__method__input"
                />
                <div className="topup__method__radio"></div>
                <BsIcons.BsBank className="radio-icon mt-0 ms-2 me-2" />
                <span className="radio-label">Virtual Account</span>
              </label>
            </div>

            <div className="topup-method-wrapper ">
              <label htmlFor="debit-card" className="topup-method">
                <Input
                  value="Debit Card"
                  onChange={handleChange}
                  checked={topUpMethod === "Debit Card"}
                  type="radio"
                  name="topUpMethod"
                  id="debit-card"
                  className="topup__method__input"
                />
                <div className="topup__method__radio"></div>
                <BsIcons.BsCreditCard className="radio-icon mt-0 ms-2 me-2" />
                <span className="radio-label">Debit Card</span>
              </label>
            </div>

            <div className="topup-method-wrapper ">
              <label htmlFor="cash" className="topup-method">
                <Input
                  value="Instant Top Up / Cash"
                  onChange={handleChange}
                  checked={topUpMethod === "Instant Top Up / Cash"}
                  type="radio"
                  name="topUpMethod"
                  id="cash"
                  className="topup__method__input"
                />
                <div className="topup__method__radio"></div>
                <BsIcons.BsCashStack className="radio-icon mt-0 ms-2 me-2" />
                <span className="radio-label">Instant Top Up / Cash</span>
              </label>
            </div>
          </div>

          <div className="btn-topup-method mt-5 d-flex flex-end">
            <Button
              isLoading={topupMethodData.loading}
              onClick={handleClick}
              className="btn-method-continue"
            >
              Continue
            </Button>
          </div>
        </section>
      </div>

      <div className="big-screen-content d-none d-lg-block d-lg-flex mt-lg-2">
        <Sidebar />

        <section className="topup-method-container content-bar big-screen col-lg-8 animation-pull-out ">
          <p className="topup-text ms-4 mt-3">Top Up Method</p>

          <p className="topup-input-desc ms-4">
            Choose topup method below and then press Continue button. <br /> Due
            to several reasons we recommend you to choose <br />{" "}
            <strong> Instant Top Up/Cash </strong> method.
          </p>

          <div className="topup-method-form mt-3 d-flex flex-column flex-wrap d-flex justify-content-center align-items-center">
            <div className="topup-method-wrapper ">
              <label htmlFor="virtual-account" className="topup-method">
                <Input
                  value="Virtual Account"
                  onChange={handleChange}
                  checked={topUpMethod === "Virtual Account"}
                  type="radio"
                  name="topUpMethod"
                  id="virtual-account"
                  className="topup__method__input"
                />
                <div className="topup__method__radio"></div>
                <BsIcons.BsBank className="radio-icon mt-0 ms-2 me-2" />
                <span className="radio-label">Virtual Account</span>
              </label>
            </div>

            <div className="topup-method-wrapper ">
              <label htmlFor="debit-card" className="topup-method">
                <Input
                  value="Debit Card"
                  onChange={handleChange}
                  checked={topUpMethod === "Debit Card"}
                  type="radio"
                  name="topUpMethod"
                  id="debit-card"
                  className="topup__method__input"
                />
                <div className="topup__method__radio"></div>
                <BsIcons.BsCreditCard className="radio-icon mt-0 ms-2 me-2" />
                <span className="radio-label">Debit Card</span>
              </label>
            </div>

            <div className="topup-method-wrapper ">
              <label htmlFor="cash" className="topup-method">
                <Input
                  value="Instant Top Up / Cash"
                  onChange={handleChange}
                  checked={topUpMethod === "Instant Top Up / Cash"}
                  type="radio"
                  name="topUpMethod"
                  id="cash"
                  className="topup__method__input"
                />
                <div className="topup__method__radio"></div>
                <BsIcons.BsCashStack className="radio-icon mt-0 ms-2 me-2" />
                <span className="radio-label">Instant Top Up / Cash</span>
              </label>
            </div>
          </div>

          <div className="btn-topup-method mt-5 d-flex flex-end">
            <Button
              isLoading={topupMethodData.loading}
              onClick={handleClick}
              className="btn-method-continue"
            >
              Continue
            </Button>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default TopUp;
