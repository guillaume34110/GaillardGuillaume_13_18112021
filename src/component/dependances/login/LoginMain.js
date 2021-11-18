import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Loginmain = (state) => {
    let currentValue
    useEffect(() => {
       console.log(state)
    }, [])
    return (
        <main className="main bg-dark">
        <section className="sign-in-content">
        <FontAwesomeIcon className = "fa fa-user-circle " icon={faUserCircle} />
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label
              ><input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label
              ><input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
            </div>
            {/*!-- PLACEHOLDER DUE TO STATIC SITE -->
            <a href="./user.html" className="sign-in-button">Sign In</a>
            {/*<!-- SHOULD BE THE BUTTON BELOW -->*/}
            <button className="sign-in-button">Sign In</button> 
           
          </form>
        </section>
      </main>
    );
}

export default Loginmain;