import React from "react";
import { Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const EmailVerification = () => {
  const [queryParams] = useSearchParams();
  console.log(queryParams.get("c"));
  console.log(queryParams.get("e"));
  return (
    <div className="verify-email text-center mt-5 ">
      <h2>Email Verification Page</h2>
      <hr />
      <Spinner variant="primary" animation="border" /> please wait...
    </div>
  );
};

export default EmailVerification;
