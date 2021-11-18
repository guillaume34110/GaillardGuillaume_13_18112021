import React from 'react';
import{
  BrowserRouter,
Routes,
Route,
} from "react-router-dom";
import Dasboard from './component/pages/Dasboard';
import Home from './component/pages/Home';
import Login from './component/pages/Login';
import PrivateRoute from './private-route/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route  path = "/dashboard" element = {<PrivateRoute><Dasboard /></PrivateRoute>} /> {/*https://dev.to/iamandrewluca/private-route-in-react-router-v6-lg5*/}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
