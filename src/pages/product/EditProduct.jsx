import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

import AdminLayout from "../layouts/AdminLayout";
import { Link } from "react-router-dom";
import { ProductTable } from "../../components/product-table/ProductTable";

export const EditProduct = () => {
  return (
    <AdminLayout>
      <h1 className="mt-5">Products</h1>

      <div className="text-end">
        <Link to="/product/edit:_id">
          <Button variant="primary">
            <i class="fa-solid fa-plus"></i> Add new product
          </Button>
        </Link>
      </div>
      <hr />
      <div className="product-list">
        <ProductTable />
      </div>
    </AdminLayout>
  );
};
