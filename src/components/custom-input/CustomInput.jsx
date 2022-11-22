import React from "react";
import Form from "react-bootstrap/Form";

const CustomInput = ({ label, ...rest }) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...rest} />
    </Form.Group>
  );
};

export default CustomInput;
