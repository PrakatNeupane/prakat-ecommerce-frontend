import React from "react";
import { CategoryForm } from "../../components/cat-form/CategoryForm";
import { CategoryTable } from "../../components/cat-table/CategoryTable";
import AdminLayout from "../layouts/AdminLayout";

const Categories = () => {
  return (
    <AdminLayout>
      {/* form */}
      <h3 className="mt-3">Please choose your category !!</h3>
      <CategoryForm></CategoryForm>
      <hr />
      {/* table */}
      <CategoryTable></CategoryTable>
    </AdminLayout>
  );
};

export default Categories;
