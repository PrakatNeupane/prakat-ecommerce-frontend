import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const EmailVerification = () => {
  const [queryParams] = useSearchParams();
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const obj = {};
    const emailValidationCode = queryParams.get("c");
    const email = queryParams.get("e");
  }, []);

  console.log(queryParams.get("c"));
  console.log(queryParams.get("e"));
  return (
    <div className="container d-flex justify-content-center">
      <div className="verify-email mt-5 w-75 bg-info p-2 rounded ">
        <h2>Email Verification Page</h2>
        <hr />
        <Spinner variant="primary" animation="border" /> please wait...
      </div>
    </div>
  );
};

// useEffect why? once the component has been rendered we need to make external api call without blocking the UI and get the data

export default EmailVerification;
