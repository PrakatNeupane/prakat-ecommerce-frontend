import { deleteProduct, getProducts, postProduct } from "../../helpers/axiosHelpers"
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

    const result = await response;

    toast[result.status](result.message);
    result.status === "success" && dispatch(fetchProductsAction());
};

export const deleteProductAction = _id => async (dispatch) => {
    const responsePromise = deleteProduct(_id)
    toast.promise(responsePromise, {
        pending: "Please wait"
    })
    const result = await responsePromise
    const { status, message } = result
    toast[status](message)
    status === "success" && dispatch(fetchProductsAction())
}