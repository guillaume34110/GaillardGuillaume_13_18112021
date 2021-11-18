import { createSlice, configureStore,createAsyncThunk } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (email,password) => {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', {
        email : "steve@rogers.com",
        password: 'Rogers'
      });
      return response
    }
  )
export const usersSlice = createSlice({
    name: 'users',
    initialState: { entities: [], loading: 'idle' },
    reducers: {
      // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(fetchUserById.fulfilled, (state, action) => {
        // Add user to the state array
        state.entities.push(action.payload)
      })
    },
  })
  
  // Later, dispatch the thunk as needed in the app
  
  //dispatch(fetchUserById(123))


