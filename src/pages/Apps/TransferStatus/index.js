import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import * as BsIcons from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/base/Button";
import img from "../../../assets/img/blank-profile-picture.png";
import Sidebar from "../../../components/module/Sidebar";

const TransferStatus = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const [transaction, setTransaction] = useState({
    receiver_name: "",
    receiver_phone: "",
    receiver_picture: "",
    amount_transfer: "",
    balance_left: "",
    date: "",
    notes: ""
  });
  const date = new Date(transaction.date);
  const DATE_OPTIONS = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
    // timeZone: "WIT",
    // timeZoneName: "short"
  };
  const convertedDate = date.toLocaleDateString("en-GB", DATE_OPTIONS);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_GWALLET_API}/transaction/history`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => {
        const result = res.data.data[0];
        setTransaction(result);
      })
      .catch((err) => {
        console.log(err.response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/apps");
  };
  return (
    <Fragment>
      {/* main content for mobile */}
      <div className="small-screen-content d-lg-none animation-pull-out">
        <section className="profileContentSm d-flex flex-column justify-content-center align-items-center d-lg-none">
          <div className="d-flex flex-column align-items-center p-2 ">
            <BsIcons.BsCheckCircleFill className="success-icon text-green" />
            <p className="history-title mt-3 ms-4 me-4">Transfer Success</p>
          </div>

          <div className="d-flex flex-start mt-3 w-100">
            <p className="history-title ">Details</p>
          </div>

          <div className="detailsTransferWrapperSm d-flex flex-column w-100">
            <div className=" confirm-items w-100">
              <p className="text-title m-2">Amount</p>
              <p className="text-content m-2">
                Rp {transaction.amount_transfer}
              </p>
            </div>

            <div className=" confirm-items  w-100">
              <p className="text-title m-2">Balance Available</p>
              <p className="text-content m-2">Rp {transaction.balance_left}</p>
            </div>

            <div className=" confirm-items w-100">
              <p className="text-title m-2">Date & Time</p>
              <p className="text-content m-2">{convertedDate}</p>
            </div>

            <div className=" confirm-items w-100">
              <p className="text-title m-2">Notes</p>
              <p className="text-content m-2">{transaction.notes}</p>
            </div>
          </div>

          <div className="d-flex flex-start mt-2 w-100">
            <p className="history-title ">Transfer To</p>
          </div>

          {/* <!-- receiver mobile --> */}
          <div className="d-flex receivers p-1 mb-3 mt-1 ms-4 me-4 ">
            <img
              className="receiver-picture user-pic mt-2 ms-4"
              src={
                transaction.receiver_picture
                  ? transaction.receiver_picture
                  : img
              }
              height={54}
              alt="ReceiverPic"
            />
            <div className="receiver-detail ms-3 mt-2">
              <p className="text-title-name mb-0">
                {transaction.receiver_name}
              </p>
              <p className="weekly mt-1">+62 {transaction.receiver_phone}</p>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center mt-5 w-100">
            <Button
              onClick={backToHome}
              className="btn-back-home text-white w-100"
            >
              Back to Home
            </Button>
          </div>
        </section>
      </div>

      {/* main content for desktop */}
      <div className="big-screen-content d-none d-lg-block d-lg-flex mt-lg-2">
        <Sidebar />

        <section className="content-bar big-screen col-lg-8 animation-pull-out ">
          <div className="d-flex flex-column align-items-center p-2 mb-3 mt-3">
            <BsIcons.BsCheckCircleFill className="success-icon text-green" />
            <p className="history-title mt-3 ms-4 me-4">Transfer Success</p>
          </div>

          <div className="details-transfer ms-2 me-2">
            <div className="row mt-2">
              <div className="col-5 col-md-11 ms-3 ms-md-5 me-md-5 confirm-items">
                <p className="text-title m-2">Amount</p>
                <p className="text-content m-2">
                  Rp {transaction.amount_transfer}
                </p>
              </div>
              <div className="col-5 col-md-11 offset-1 ms-md-5 me-md-5 confirm-items mt-md-1">
                <p className="text-title m-2">Balance Left</p>
                <p className="text-content m-2">
                  Rp {transaction.balance_left}
                </p>
              </div>
            </div>
            <div className="row mt-5 mt-md-1">
              <div className="col-5 col-md-11 ms-3 ms-md-5 me-md-5 confirm-items">
                <p className="text-title m-2">Date & Time</p>
                <p className="text-content m-2">{transaction.date}</p>
              </div>
            </div>
            <div className="row mt-5 mt-md-1 mb-md-5 mb-lg-1">
              <div className="col-11 ms-3 ms-md-5 me-md-5 confirm-items">
                <p className="text-title m-2">Notes</p>
                <p className="text-content m-2">{transaction.notes}</p>
              </div>
            </div>

            <p className="history-title mt-3 ms-5">Transfer to</p>

            {/* <!-- receiver lg, xl, xxl --> */}
            <div className="d-flex receivers p-1 mb-3 mt-3 ms-5 me-4">
              <img
                className="receiver-picture user-pic ms-4 mt-2"
                src={
                  transaction.receiver_picture
                    ? transaction.receiver_picture
                    : img
                }
                alt="Samuel"
              />
              <div className="receiver-detail ms-3 mt-2">
                <p className="text-title-name mb-0">
                  {transaction.receiver_name}
                </p>
                <p className="weekly mt-1">{transaction.receiver_phone}</p>
              </div>
            </div>
          </div>

          {/* <!-- button continue lg, xl, xxl --> */}
          <div className="buttons d-flex flex-row justify-content-end">
            <div className="mt-5 mb-4 me-2">
              <Button className="btn-share w-100">
                <BsIcons.BsShare className="share-icon" />
              </Button>
            </div>
            <div className="mt-5 mb-4 me-1">
              <Button className="btn-download-pdf d-flex flex-row align-items-center w-100 text-blue">
                <BsIcons.BsDownload className="share-icon me-2" />
                Download
              </Button>
            </div>
            <div className="d-flex mt-5 mb-4 me-5 ms-1">
              <Button
                onClick={backToHome}
                className="btn-back-home text-white w-100"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default TransferStatus;
