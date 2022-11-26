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
    console.log(cat);
    setSelectedCategory(cat);
    dispatch(toggleModal());
  };

  const parentCats = categories.filter((item) => !item.parentCatId);
  const childCats = categories.filter((item) => item.parentCatId);

  return (
    <div>
      <EditCategory selectedCategory={selectedCategory} />{" "}
      <h4> {categories.length} Categories found !</h4>
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {parentCats.map((item, i) => (
            <>
              <tr key={item._id}>
                <td>{item.catName}</td>
                <td
                  className={
                    item.status === "active" ? "text-success" : "text-danger"
                  }
                >
                  {item.status}
                </td>
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
              {childCats.map((cat, index) => {
                cat.parentCatId === item._id && (
                  <tr key={cat._id}>
                    <td> --- {cat.catName}</td>
                    <td
                      className={
                        cat.status === "active" ? "text-success" : "text-danger"
                      }
                    >
                      {cat.status}
                    </td>
                    <td>
                      <Button
                        variant="warning"
                        onClick={() => {
                          handleOnEdit(cat);
                        }}
                      >
                        Edit
                      </Button>
                      {"  "}
                      <Button
                        title="You can only delete if child category does not exist"
                        onClick={() => handleOnDelete(cat._id)}
                        variant="danger"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
