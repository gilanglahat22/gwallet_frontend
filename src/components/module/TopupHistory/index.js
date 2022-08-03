/* eslint-disable array-callback-return */
import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./topuphistory.css";
import { useDispatch, useSelector  } from "react-redux";
import img from "../../../assets/img/blank-profile-picture.png";
import * as RiIcons from "react-icons/ri";
import { GetTopupHistory } from "../../../redux/actions/apps/getTopupHistory";
import topupImg from "../../../assets/img/topup_logo.png";

const TopupHistory = () => {
  const dispatch = useDispatch();
  const topupHistory = useSelector((state) => state.GetTopupHistory).data;
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(GetTopupHistory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const toTransactionPage = () => {
    navigate("/apps/topuphistory");
  };
  return (
    <Fragment>
      <section className="col-lg-6 history-content-transaction d-lg-flex flex-column me-3">
        <div className="history-transaction-title ms-2">
          <p className="">Topup History</p>

          <p onClick={toTransactionPage} className="history-page-link">
            See All
          </p>
        </div>

        {topupHistory.length > 0 ? (
          topupHistory.map((profile, index) => {
            const date = new Date(profile.date);
            const DATE_OPTIONS = {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric"
            };
            const convertedDate = date.toLocaleDateString(
              "en-GB",
              DATE_OPTIONS
            );

            if (profile.status === "Success") {
              return (
                <Link
                  to={"/apps"}
                  key={index}
                  className="history-transaction-profiles d-flex flex-row justify-content-between align-items-center mb-3 ms-3 me-3 pt-2 pb-2"
                >
                <img
                  className="receiver-picture user-pic mt-1 ms-3"
                  src={
                    topupImg
                  }
                  height="52px"
                  alt="Samuel"
                />
                <div className="profile-description history-page">
                    <p className="profile-desc-name mb-0">
                      {profile.topup_method}
                    </p>
                    <p className="profile-desc mb-0">{convertedDate}</p>
                  </div>
                  <p className="nominal-topup me-3">
                    +Rp{profile.amount_topup}
                  </p>
                </Link>
              );
            }
          })
        ) : (
          <div className="no-transactions d-flex flex-column justify-content-center align-items-center">
            <RiIcons.RiFileList3Line className="no-transactions-icon" />
            <p className="no-transactions-text mt-2">No Topup</p>
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default TopupHistory;
