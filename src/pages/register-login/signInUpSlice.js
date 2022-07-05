import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    response: {
        status: "",
        message: ""
    },
}

const signInUpSlice = createSlice({
    name: "signInUp",
    initialState,
    reducers: {
        isPending: state => {
            state.isLoading = true
        },
        responseResolved: (state, { payload }) => {
            state.isLoading = false
            state.response = payload
        }
    }
})

const { reducer, actions } = signInUpSlice // reducer is the state and actions are the action creators / functions

export const { isPending, isLoading } = actions

export default reducer