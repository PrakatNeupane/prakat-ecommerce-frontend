import { configureStore } from '@reduxjs/toolkit'
import SignInUpReducer from './pages/register-login/signInUpSlice'
import systemReducer from './system-state/systemSlice'

const store = configureStore({
    reducer: {
        signInUp: SignInUpReducer,
        system: systemReducer,
    }
})

export default store