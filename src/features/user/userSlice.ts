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
        setLoading: (state) => {
            return {
                ...state,
                loading: true,
                error: ''
            }
        },

        setUser: (state, action: PayloadAction<userData>): userState => {
            return {
                data: action.payload,
                loading: false,
                error: '',
            }
        }
    },
    extraReducers: (builder) => {}
});

export const { setUser, setLoading } = userSlice.actions;

export const selectUser = (state: userState) => state.data;

export default userSlice.reducer;