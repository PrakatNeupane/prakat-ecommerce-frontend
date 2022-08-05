import React from "react";
import { CategoryForm } from "../../components/cat-form/CategoryForm";
import { CategoryTable } from "../../components/cat-table/CategoryTable";
import AdminLayout from "../layouts/AdminLayout";

const Categories = () => {
  return (
    <AdminLayout>
      {/* form */}
      <CategoryForm></CategoryForm>
      <hr />
      {/* table */}
      <CategoryTable></CategoryTable>
    </AdminLayout>
  );
};

export default Categories;
