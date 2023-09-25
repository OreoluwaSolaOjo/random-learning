import {configureStore} from '@reduxjs/toolkit';
import authReducer from "./features/auth-slice";
// configurestore used to configure store
export const store = configureStore({
    // a reducer is a function that takes in an action and the previous state in an application to return a new state
    reducer: {
        authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;