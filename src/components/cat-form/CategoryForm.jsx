import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const initialState = {
  parentCat: "",
  catName: "",
};

export const CategoryForm = () => {
  const [form, setForm] = useState(initialState);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <Form className="py-5" onSubmit={handleOnSubmit}>
      <Row className="g-3">
        <Col md="5">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Select defaultValue="Choose..." onChange={handleOnChange}>
              <option name="parentCat" value="">
                ... Select Parent Category ...
              </option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md="4">
          <Form.Control
            name="catName"
            placeholder="Category Name"
            onChange={handleOnChange}
            required
          />
        </Col>
        <Col md="3">
          <Button type="submit">Add Category</Button>
        </Col>
      </Row>
    </Form>
  );
};
