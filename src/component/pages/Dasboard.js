import React, { useEffect, useState } from 'react';
import Dashboardheader from '../dependances/dashboard/DashboardHeader';
import Footer from '../dependances/Footer';
import { store } from '../../app/store';
import { getProfile } from '../../RequestAPI/auth';
import {  profile } from '../../user-data/userRedux';
import { useDispatch, useSelector } from 'react-redux';

const Dasboard = () => {
    const dispatch = useDispatch()
    const userData = useSelector((state)=> state.userData)
    useEffect(() => {
        console.log(store.getState().userData.token.payload ,'token');
        apiCall()
    }, [])

    const apiCall = async () => {
        const newData = await getProfile(store.getState().userData.token.payload)
        if (newData.data) {
            console.log(newData);
            dispatch(profile(newData.data.body))
        }
        }
        return (
            <div>
                <Dashboardheader  />
                hi
                <Footer />
            </div>
        );
    }
    export default Dasboard;
