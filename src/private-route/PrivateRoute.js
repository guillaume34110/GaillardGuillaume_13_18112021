import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import { store } from '../app/store';

export default function PrivateRoute({ children }) { //https://dev.to/iamandrewluca/private-route-in-react-router-v6-lg5
    const  currentUser  = store.getState().userData.token

    return currentUser ? children : <Navigate to="/login" />;
    
}
