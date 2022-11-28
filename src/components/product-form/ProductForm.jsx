import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesAction } from "../../pages/categories/categoryAction";
import { postProductAction } from "../../pages/product/productAction";
import CustomInput from "../custom-input/CustomInput";

const initialState = {
  catId: null,
  description: "example",
  name: "example",
  sku: "example",
  description: "example",
  qty: 10,
  price: 10,
  salesPrice: 10,
  salesStartDate: null,
  salesEndDate: null,
  status: "inactive",
};

const ProductForm = () => {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    // call api to fetch al the categories and set in the store
    dispatch(fetchCategoriesAction());
  }, []);

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;

    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(postProductAction(form));
  };
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
      required: true,
    },
  ];

  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Status"
        name="status"
        className="mb-3"
        onChange={handleOnChange}
        required
      />

      <Form.Group controlId="formGridState" className="mb-3">
        <Form.Select
          defaultValue="Choose..."
          name="catId"
          onChange={handleOnChange}
          required
        >
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
        <CustomInput onChange={handleOnChange} key={i} {...item}></CustomInput>
      ))}

      <Button variant="primary" type="submit" className="mb-2">
        Add Product
      </Button>
    </Form>
  );
};

export default ProductForm;
