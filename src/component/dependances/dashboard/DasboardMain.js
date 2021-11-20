import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Acount from './Acount';
import Editname from './EditName';

const Dasboardmain = () => {
    const [modeSet , setModeSet] = useState('normal')
    return (
        <main className={"main bg-dark-" + modeSet}>
     <Editname modeSet = {modeSet} setModeSet = {setModeSet}/>
      <h2 className="sr-only">Accounts</h2>
        <Acount modeSet = {modeSet} setModeSet = {setModeSet}/>
     
    </main>
    );
}

export default Dasboardmain;
