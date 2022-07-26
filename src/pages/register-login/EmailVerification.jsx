import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { postEmailVerification } from "../../helpers/axiosHelpers";

const EmailVerification = () => {
  const [queryParams] = useSearchParams();
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const obj = {
      emailValidationCode: queryParams.get("c"),
      email: queryParams.get("e"),
    };

    const doFetch = async () => {
      const response = await postEmailVerification(obj);
      console.log(response);
    };
    doFetch();
  }, []);

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
