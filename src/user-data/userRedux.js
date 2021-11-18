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
        }
    }
})
export const {login} = userSlice.actions

export default userSlice.reducer
