import React from "react";
import AdminSidebar from "../../components/admin-sidebar/AdminSidebar";
import Footer from "./Footer";
import Header from "./Header";

const AdminLayout = ({ children }) => {
  return (
    <div>
      {/* Header section */}
      <Header />
      <AdminSidebar />
      {/* main section */}
      <main className="main">{children}</main>
      {/* footer section */}
      <Footer></Footer>
    </div>
  );
};

export default AdminLayout;
