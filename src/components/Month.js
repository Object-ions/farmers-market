import React from "react";
import PropTypes from "prop-types";
import "./Month.css";

function Month(props) {

  // const selectedProduce = 

  // <ul>
  //   {props.selection.map((select, index) =>
  //     <li key={index}>{select}</li>
  //   )}
  // </ul>

  return (
    <div className="month-buttons">
      <button className="month-button">{props.month}</button>
      {/* {selectedProduce} */}
    </div>
  );
}

Month.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array
};

export default Month;