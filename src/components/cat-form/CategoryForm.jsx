import React from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export const CategoryForm = () => {
  return (
    <Form className="py-5">
      <Row className="g-3">
        <Col md="5">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Select defaultValue="Choose...">
              <option value="">... Select Parent Category ...</option>
              <option>more coming dynamically</option>
              <option>more coming dynamically</option>
              <option>more coming dynamically</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md="4">
          <Form.Control name="catName" placeholder="Category Name" />
        </Col>
        <Col md="3">
          <Button type="submit">Add Category</Button>
        </Col>
      </Row>
    </Form>
  );
};
