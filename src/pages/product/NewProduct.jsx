import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";

const NewProduct = () => {
  return (
    <AdminLayout>
      <div className="mt-3 mb-3">
        <Link to="/products">
          <Button variant="none">
            <i class="fa-solid fa-chevron-left"></i> Back
          </Button>
        </Link>
      </div>
      <h1>Add New Product</h1>
      <hr />
      <div>Form</div>
    </AdminLayout>
  );
};

export default NewProduct;
