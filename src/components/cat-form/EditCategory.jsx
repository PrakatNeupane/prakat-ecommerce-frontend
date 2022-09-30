import React, { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { postCategoriesAction } from "../../pages/categories/categoryAction";
import { MyVerticallyCenteredModal } from "../modal/Modal";

const initialState = {
  status: "inactive",
  parentCatId: "",
  catName: "",
};

export const EditCategory = ({ selectedCategory }) => {
  console.log(selectedCategory);
  const dispatch = useDispatch();
  const [form, setForm] = useState(selectedCategory);
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    setForm(selectedCategory);
  }, [selectedCategory]);
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
    const parentCatId = form.parentCatId ? form.parentCatId : undefined;
    // dispatch action to update the category
    // dispatch(postCategoriesAction({ ...form, parentCatId }));
    console.log(form);
  };

  console.log(form);
  return (
    <MyVerticallyCenteredModal title="Edit Category">
      {" "}
      <Form className="py-5" onSubmit={handleOnSubmit}>
        <Row className="g-3">
          <Col md="2">
            <Form.Check
              onChange={handleOnChange}
              type="switch"
              id="custom-switch"
              label="Status"
              name="status"
              checked={form.status === "active"}
            />
          </Col>
          <Col md="3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Select
                defaultValue="Choose..."
                name="parentCatId"
                onChange={handleOnChange}
              >
                <option value> ...Select parent Category...</option>

                {categories.map(
                  (item) =>
                    !item.parentCatId && (
                      <option
                        value={item._id}
                        key={item._id}
                        selected={item._id === form.parentCatId}
                      >
                        {item.catName}
                      </option>
                    )
                )}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md="4">
            <Form.Control
              name="catName"
              placeholder="Category Name"
              onChange={handleOnChange}
              value={form.catName}
              required
            />
          </Col>
          <Col md="3">
            <Button type="submit">Update Category</Button>
          </Col>
        </Row>
      </Form>
    </MyVerticallyCenteredModal>
  );
};
