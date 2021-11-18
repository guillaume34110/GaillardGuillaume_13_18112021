import React from 'react';
import{
  BrowserRouter,
Routes,
Route,
} from "react-router-dom";
import Home from './component/pages/Home';
import Login from './component/pages/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
