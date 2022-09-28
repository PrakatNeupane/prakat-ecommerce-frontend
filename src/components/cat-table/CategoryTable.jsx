import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategoriesAction,
  fetchCategoriesAction,
} from "../../pages/categories/categoryAction";
import { toggleModal } from "../../system-state/systemSlice";
import { EditCategory } from "../cat-form/EditCategory";
import { MyVerticallyCenteredModal } from "../modal/Modal";

export const CategoryTable = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState({});

  const { categories } = useSelector((state) => state.category);
  useEffect(() => {
    // call api to fetch al the categories and set in the store
    dispatch(fetchCategoriesAction());
  }, []);

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      dispatch(deleteCategoriesAction(_id));
    }
  };

  const handleOnEdit = (cat) => {
    setSelectedCategory(cat);
    dispatch(toggleModal());
  };

  return (
    <div>
      <EditCategory selectedCategory={selectedCategory} />{" "}
      <h4> {categories.length} Categories found !</h4>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Name</th>
            <th>Parent ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td
                className={
                  item.status === "active" ? "text-success" : "text-danger"
                }
              >
                {item.status}
              </td>
              <td>{item.catName}</td>
              <td>{item.parentCatId}</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => {
                    handleOnEdit(item);
                  }}
                >
                  Edit
                </Button>
                {"  "}
                <Button
                  title="You can only delete if child category does not exist"
                  onClick={() => handleOnDelete(item._id)}
                  variant="danger"
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
