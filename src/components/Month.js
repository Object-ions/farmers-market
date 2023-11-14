import React from "react";
import PropTypes from "prop-types";
import "./Month.css";

function Month(props) {

  return (
    <div className="month-buttons">
      <button className="month-button" onClick={props.onClick}>{props.month}</button>
    </div>
  );
}

Month.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array,
  onClick: PropTypes.func
};

export default Month;


