import React from "react";
import PropTypes from "prop-types";

function Month(props) {

  const selectedProduce = 

  <ul>
    {props.selection.map((select, index) =>
      <li key={index}>{select}</li>
    )}
  </ul>

  return (
    <React.Fragment>
      <h3>{props.month}</h3>
      {selectedProduce}
      <hr />
    </React.Fragment>
  );
}

Month.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array
};

export default Month;