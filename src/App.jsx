import "./App.css";
import { Routes,Route } from "react-router-dom";
import Login from "./pages/login/Login";
import LogUp from "./pages/signup/LogUp";
import Home from "./pages/home/Home"


function App() {
  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
        {/* <Login/> */}
        {/* <LogUp/> */}
        <Home/>
       
        
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/signup" element={<SignUp />} /> */}
        

      </div>
    </>
  );
}

export default App;
