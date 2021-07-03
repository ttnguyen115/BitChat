import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { roomData, roomState } from '../types';

const initialState: roomState = {
    data: [],
    loading: false,
    error: ''
}

const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        setRoom: (state, action: PayloadAction<roomData[]>): roomState => {
            return {
                ...state,
                data: action.payload
            }
        }
    }
});

export const { setRoom } = roomSlice.actions;

export const roomSelect = (state: RootState) => state;

export default roomSlice.reducer;