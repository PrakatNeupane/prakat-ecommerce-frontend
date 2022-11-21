import { getProducts } from "../../helpers/axiosHelpers"
import { setProducts } from "./productSlice"

export const fetchProductsAction = () => async dispatch => {
    // call axios for api call
    const response = await getProducts()
    response.status === 'success' && dispatch(setProducts(response.result))
}