import { getCategories } from "../../helpers/axiosHelpers";
import { setCategories } from "./categorySlice";

export const fetchCategoriesAction = () => dispatch => {
    // call axios for api call
    const response = await getCategories()

    response.status === "success" && setCategories(response.result)
}