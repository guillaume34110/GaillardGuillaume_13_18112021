import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice ({
    name: 'user',
    initialState: {
        connected: false, 
        token: null,
    },
    reducers:{
        login : (state,token) => {
            state.connected = true;
            state.token = token
        },
        logout : (state) => {
            state.connected = false; 
            state.token = null
        },
    }
})
export const {login, logout} = userSlice.actions

export default userSlice.reducer
