import { postUser } from '../../helpers/axiosHelpers'
import { isPending, responseResolved } from './signInUpSlice'
import { toast } from "react-toastify";

export const postUserAction = user => async dispatch => {
    dispatch(isPending())
    console.log(user)
    // call axiohelper to call api

    const data = await postUser(user)
    console.log(data)
    dispatch(responseResolved(data))
}