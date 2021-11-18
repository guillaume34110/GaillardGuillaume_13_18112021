import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { store } from '../../../app/store';
import { apiLogin } from '../../../RequestAPI/auth';
import { useDispatch } from 'react-redux';
import { login } from '../../../user-data/userRedux';
import { useNavigate } from "react-router-dom"
const Loginmain = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const userNameRef = useRef(null)
    const passwordRef = useRef(null)
    let newData
    useEffect(() => {
       console.log(store.getState())
       const savedData = window.localStorage.getItem('userData')
       console.log(savedData.userName , 'saved');
    }, [])
    const userLogin = async (e) => {
        e.preventDefault()
        const ids = {userName : userNameRef.current.value , password : passwordRef.current.value}
        newData = await apiLogin(ids.userName, ids.password)
        console.log(newData,'data');
       if (newData) dispatch(login(newData.data.body.token))
        console.log(store.getState())
        window.localStorage.setItem('userData',ids)
        navigate('/dashboard')
    }
    return (
        <main className="main bg-dark">
        <section className="sign-in-content">
        <FontAwesomeIcon className = "fa fa-user-circle " icon={faUserCircle} />
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label
              ><input type="text" id="username" ref ={userNameRef} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label
              ><input type="password" id="password" ref ={passwordRef}/>
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
            </div>
            {/*!-- PLACEHOLDER DUE TO STATIC SITE -->
            <a href="./user.html" className="sign-in-button">Sign In</a>
            {/*<!-- SHOULD BE THE BUTTON BELOW -->*/}
            <button className="sign-in-button" onClick = {userLogin}>Sign In</button> 
           
          </form>
        </section>
      </main>
    );
}

export default Loginmain;
