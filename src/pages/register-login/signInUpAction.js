import { isPending, isLoading } from './signInUpSlice'

export const postUserAction = user => async dispatch => {
    dispatch(isPending())

    // call axiohelper to call api


}