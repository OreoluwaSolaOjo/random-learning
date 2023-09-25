import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type InitialState = {
    value: AuthState,
}
type AuthState = {
    isAuth: boolean,
    username: string,
    uid: string,
    isModerator: boolean
}
const initialState = {
    value: {
        isAuth: false,
        username: "",
        uid: "",
        isModerator: false,
    } as AuthState
} as InitialState

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: () => {
            return initialState;
        },
        // the action would be of type payload action, so the type of the payload action is a string because that is what we are sending back to the state
        logIn: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    isAuth: true,
                    username: action.payload,
                    uid: "",
                    isModerator: false,
                }
            }
        }
    }
})

export const {logIn, logOut} = auth.actions;
export default auth.reducer;