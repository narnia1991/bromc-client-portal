import React from "react";
import PropTypes from "prop-types";

import {  Form } from "semantic-ui-react";

const propTypes = {
  label: PropTypes.string,
  width: PropTypes.number,
  value: PropTypes.string,
};

const defaultProps = {
  label: "", 
value: ""
};

function InputDisplay({
  label,
  value,
  width,
}) {

  let active = ""
  if (label === "Status" || label === "status") {
    if (value === 1 || value === "1") {
      active = "Active"
    } else if (value === 0 || value === "0") {
      active = "Inactive"
    }
  }
  else {
    active = value
  }

  return (
    <Form.Field   width={width && width} >
      {label && <label >{label}</label>}
      <p>{active ? active : "N/A"}</p>
    </Form.Field>
  );
}



export default InputDisplay;
