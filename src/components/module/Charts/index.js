import React, { Fragment } from "react";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import "./chart.css";

const Chart = (props) => {
  return (
    <Fragment>
      <section className="col-lg-6 history-content-chart d-flex flex-column ms-3">
        <div className="financial">
          <div className="income">
            <BsIcons.BsArrowDown className="icons-size text-green" />
            <p className="financial-text">Income</p>
            <p className="financial-cash">Rp {props.income}</p>
          </div>
          <div className="expense">
            <BsIcons.BsArrowUp className="icons-size text-red" />
            <p className="financial-text">Expense</p>
            <p className="financial-cash">Rp {props.expense}</p>
          </div>
        </div>
        <div className="graphic d-flex flex-column justify-content-center align-items-center">
          <div className="no-chart-record d-flex flex-column justify-content-center align-items-center mt-3 mb-5">
          <FiIcons.FiBarChart2 className="no-chart-icon mt-2" />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Chart;
