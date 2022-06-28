import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      {/* Header section */}
      <Header />
      {/* main section */}
      <main className="main">{children}</main>
      {/* footer section */}
      <Footer></Footer>
    </div>
  );
};

export default DefaultLayout;
