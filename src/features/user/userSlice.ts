import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { userState, userData } from '../types';

const initialState: userState = {
    data: null,
    loading: false,
    error: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLoading: (state): userState => {
            return {
                ...state,
                loading: true,
                error: ''
            }
        },

        setUser: (state, action: PayloadAction<userData>): userState => {
            return {
                ...state,
                data: {
                    displayName: action.payload.displayName,
                    email: action.payload.email,
                    uid: action.payload.uid,
                    photoURL: action.payload.photoURL
                },
            }
        },

        logoutUser: (state): userState => {
            return initialState;
        }
    },
    extraReducers: (builder) => {}
});

export const { setUser, setLoading, logoutUser } = userSlice.actions;

export const selectUser = (state: userState) => state.data;

export default userSlice.reducer;