import React from "react";
import { Container } from "react-bootstrap";
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
      <Container>
        <main className="main">{children}</main>
      </Container>
      {/* footer section */}
      <Footer></Footer>
    </div>
  );
};

export default AdminLayout;
