import React from "react";
import PropTypes from "prop-types";

function Month(props) {
  return (
    <React.Fragment>
      <h3>{props.month}</h3>
      <p>{props.selection}</p>
      <hr />
    </React.Fragment>
  );
}

Month.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array
};

export default Month;