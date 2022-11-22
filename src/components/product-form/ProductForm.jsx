import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesAction } from "../../pages/categories/categoryAction";
import CustomInput from "../custom-input/CustomInput";

const ProductForm = () => {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    // call api to fetch al the categories and set in the store
    dispatch(fetchCategoriesAction());
  }, []);
  const inputFields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Product Name",
      required: true,
    },
    {
      name: "sku",
      label: "SKU",
      type: "text",
      placeholder: "Product unique text",
      required: true,
    },
    {
      name: "qty",
      label: "Quantity",
      type: "number",
      placeholder: "50",
      required: true,
    },
    {
      name: "price",
      label: "Price",
      type: "number",
      placeholder: "100",
      required: true,
    },
    {
      name: "salesPrice",
      label: "Sales Price",
      type: "number",
      placeholder: "110",
    },
    {
      name: "salesStartDate",
      label: "Sales Start Date",
      type: "date",
    },
    {
      name: "salesEndDate",
      label: "Sales End Date",
      type: "date",
    },
    {
      name: "description",
      as: "textarea",
      rows: 10,
      placeholder: "Leave your comments",
    },
  ];

  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Status"
        name="status"
        className="mb-3"
      />

      <Form.Group controlId="formGridState" className="mb-3">
        <Form.Select defaultValue="Choose..." name="parentCatId">
          <option value> ...Select parent Category...</option>

          {categories.map(
            (item) =>
              !item.parentCatId && (
                <option value={item._id} key={item._id}>
                  {item.catName}
                </option>
              )
          )}
        </Form.Select>
      </Form.Group>

      {inputFields.map((item, i) => (
        <CustomInput
          key={i}
          label={item.label}
          type={item.type}
          placeholder={item.placeholder}
        ></CustomInput>
      ))}

      <Button variant="primary" type="submit" className="mb-2">
        Add Product
      </Button>
    </Form>
  );
};

export default ProductForm;
