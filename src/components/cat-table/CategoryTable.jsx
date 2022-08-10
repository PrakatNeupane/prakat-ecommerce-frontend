import { useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export const CategoryTable = () => {
  useEffect(() => {
    // call api to fetch al the categories and set in the store
  });
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Category Name</th>
          <th>Parent</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <Button variant="warning">Edit</Button>
            {"  "}
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
};
