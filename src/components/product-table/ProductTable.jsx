import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteProductAction,
  fetchProductsAction,
} from "../../pages/product/productAction";

export const ProductTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ids, setIds] = useState([]);

  const { products } = useSelector((state) => state.product);
  console.log(products);
  useEffect(() => {
    // call api to fetch al the categories and set in the store
    dispatch(fetchProductsAction());
  }, []);

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProductAction(_id));
    }
  };

  const handleOnEdit = () => {
    // go to new page
    navigate("/product/edit");
  };

  const handleOnSelect = (e) => {
    const { checked, value } = e.target;
    console.log(checked, value);
    if (value === "all") {
      if (checked) {
        const allIds = products.map((item) => item._id);
        setIds(allIds);
      } else {
        setIds([]);
      }
    }
  };

  return (
    <div style={{ overflowX: "scroll" }}>
      <h4> {products.length} Products found !</h4>
      <Table striped>
        <thead>
          <tr>
            <th>
              <Form.Check name="status" onChange={handleOnSelect} value="all" />
            </th>
            <th>#</th>
            <th>Status</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>SKU</th>
            <th>Cost Price</th>
            <th>Sales Price</th>
            <th>Sales Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, i) => (
            <tr key={item._id}>
              <td>
                {" "}
                <Form.Check
                  id="custom-switch"
                  name="status"
                  onChange={handleOnSelect}
                  value={item._id}
                  checked={ids.includes(item._id)}
                />
              </td>
              <td>{i + 1}</td>
              <td
                className={
                  item.status === "active" ? "text-success" : "text-danger"
                }
              >
                {item.status}
              </td>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>{item.sku}</td>
              <td>${item.price.toLocaleString()}</td>
              <td>{item.salesPrice || "-"}</td>
              <td>
                {item.salesStartDate
                  ? new Date(item.salesStartDate).toLocaleDateString() +
                    "-" +
                    new Date(item.salesEndDate).toLocaleDateString()
                  : "-"}
              </td>
              <td>
                <Button variant="warning" onClick={() => handleOnEdit()}>
                  Edit
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => handleOnDelete(item._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
