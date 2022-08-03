import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Balance from "../../../components/module/Balance";
import Chart from "../../../components/module/Charts";
import TopupHistory from "../../../components/module/TopupHistory";
import History from "../../../components/module/History";
import Button from "../../../components/base/Button";
import Sidebar from "../../../components/module/Sidebar";
import img from "../../../assets/img/blank-profile-picture.png";
import { GetTopupHistory } from "../../../redux/actions/apps/getTopupHistory";
import topupImg from "../../../assets/img/topup_logo.png";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";

// redux
import { useDispatch, useSelector } from "react-redux";
import { GetProfile } from "../../../redux/actions/apps/getProfile";
import { ImportsNotUsedAsValues } from "typescript";

const Dashboard = () => {
  const dispatch = useDispatch();
  const topupHistory = useSelector((state) => state.GetTopupHistory).data;
  const profileData = useSelector((state) => state.GetProfile);
  const profile = profileData.data;

  const token = JSON.parse(localStorage.getItem("token"));
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(GetTopupHistory());
    dispatch(GetProfile());
    axios
      .get(`${process.env.REACT_APP_GWALLET_API}/transaction/history`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => {
        const result = res.data.data;
        setHistory(result);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <Fragment>
      <section className="balanceSm d-flex flex-column d-lg-none ">
        <div
          onClick={() => navigate("/apps/mobile/transactions/details")}
          className="saldoSm"
        >
          <p className="saldoText">Balance</p>
          <p className="saldoNominal">Rp {profile.balance}</p>
          <p className="phoneNumber">+62 {profile.phone}</p>
        </div>
      </section>

      {/* <!-- button for xs, sm, md version --> */}
      <div className="btn btn-transaction d-flex flex-row mt-3 d-lg-none animation-pull-out">
        <Button
          onClick={() => navigate("/apps/receivers")}
          className="transfer-default d-flex flex-row justify-content-evenly align-items-center m-1"
        >
          <BsIcons.BsArrowUp className="icons-size text-green" />
          <p className="mt-3">Transfer</p>
        </Button>
        <Button
          onClick={() => navigate("/apps/topup")}
          className="topup-default d-flex flex-row justify-content-evenly align-items-center m-1"
        >
          <AiIcons.AiOutlinePlus className="icons-size text-green" />
          <p className="mt-3">Top Up</p>
        </Button>
      </div>

      {/* For mobile */}
      <div className="small-screen-content d-lg-none animation-pull-out">
        <div className="transaction-history-title d-flex flex-row justify-content-between mt-4 mb-3">
          <p className="history-title ms-2">Transfer History</p>
          <Link to={"/apps/history"}>
            <p className="text-green me-2"> See all</p>
          </Link>
        </div>

        {history.length > 0 ? (
          history.map((profile, index) => {
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
                <div
                  key={profile.id}
                  className="history-transaction-profiles d-flex flex-row justify-content-between align-items-center mb-4 pt-2 pb-2"
                >
                  <img
                    className="user-pic m-1"
                    src={
                      profile.receiver_picture ? profile.receiver_picture : img
                    }
                    alt="TransactionPic"
                    height={52}
                  />
                  <div className="profile-description">
                    <p className="profile-desc-name mb-0">
                      {profile.receiver_name}
                    </p>
                    <p className="profile-desc mb-0">{convertedDate}</p>
                  </div>
                  <p className="nominal-subscription">
                    -Rp {profile.amount_transfer}
                  </p>
                </div>
              );
            }
          })
        ) : (
          <div className="no-transactions d-flex flex-column justify-content-center align-items-center">
            <RiIcons.RiFileList3Line className="no-transactions-icon" />
            <p className="no-transactions-text mt-2">No Transactions</p>
          </div>
        )}
      </div>
      <div className="small-screen-content d-lg-none animation-pull-out">
        <div className="transaction-history-title d-flex flex-row justify-content-between mt-4 mb-3">
          <p className="history-title ms-2">Topup History</p>
          <Link to={"/apps/topuphistory"}>
            <p className="text-green me-2"> See all</p>
          </Link>
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
                  className="history-transaction-profiles d-flex flex-row justify-content-between align-items-center mb-4 pt-2 pb-2"
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
      </div>
      

      {/* <!-- main content for lg, xl, xxl --> */}
      <div className="big-screen-content d-none d-lg-block d-lg-flex mt-lg-2">
        <Sidebar />

        <section className="content-bar col-lg-8 animation-pull-out ">
          <section className="menu-content ">
            <Balance
              balance={profile.balance}
              user_phone={
                profile.phone ? `+62 ${profile.phone}` : "+ Add phone number"
              }
            />

            <section className="row history-content d-lg-flex flex-row">
              <Chart income={profile.income} expense={profile.expense} />

              <History />
            </section>
            <section className="row history-content d-lg-flex flex-row">
              <TopupHistory />
            </section>
          </section>
        </section>
      </div>
    </Fragment>
  );
};

export default Dashboard;
