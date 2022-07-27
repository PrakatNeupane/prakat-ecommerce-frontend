import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import LoginForm from "../../components/login-form/LoginForm";

const LoginPage = () => {
  return (
    <DefaultLayout>
      <LoginForm />
    </DefaultLayout>
  );
};

export default LoginPage;
