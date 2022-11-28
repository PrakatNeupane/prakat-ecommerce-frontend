import { getProducts, postProduct } from "../../helpers/axiosHelpers"
import { setProducts } from "./productSlice"
import { toast } from "react-toastify";

export const fetchProductsAction = () => async dispatch => {
    // call axios for api call
    const response = await getProducts()
    response.status === 'success' && dispatch(setProducts(response.result))
}

export const postProductAction = (obj) => async (dispatch) => {
    const response = postProduct(obj);
    toast.promise(response, {
        pending: "Please wait ....",
    });

    const { status, message } = await response;

    toast[status](message);

    status === "success" && dispatch(fetchProductsAction());
};