import React, { useEffect, useState } from 'react';
import Dashboardheader from '../dependances/dashboard/DashboardHeader';
import Footer from '../dependances/Footer';
import { store } from '../../app/store';
import { getProfile } from '../../RequestAPI/auth';
import {  profile } from '../../user-data/userRedux';
import { useDispatch, useSelector } from 'react-redux';
import Dasboardmain from '../dependances/dashboard/DasboardMain';

const Dasboard = () => {
    const dispatch = useDispatch()
    const userData = useSelector((state)=> state.userData)
    useEffect(() => {
        console.log(store.getState().userData.token.payload ,'token');
        apiCall()
    }, [])

    const apiCall = async () => {
        const newDataProfile = await getProfile(store.getState().userData.token.payload)
        if (newDataProfile.data) {
            console.log(newDataProfile);
            dispatch(profile(newDataProfile.data.body))
        }
      
        }
        return (
            <div>
                <Dashboardheader  />
                <Dasboardmain />
                <Footer />
            </div>
        );
    }
    export default Dasboard;
