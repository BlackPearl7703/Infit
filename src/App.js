import React, { useState,useContext } from "react";
import "./App.css";
import { Route,Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Home from './Pages/Home'
import GetTutorials from "./Pages/GetTutorials";
import GetCustomized from "./Pages/GetCustomized";
import Dashboard from "./Pages/DashBoard";
import Login from "./Pages/Login";
import DataCollection from "./Pages/DataCollection";
import SecondPage from "./components/SecondPage";
import Footer from "./components/Footer";
import GetWorkout from "./Pages/GetWorkout";
import Warmup from "./Pages/Warmup";
import Exercise from "./Pages/Exercise";
import Cooldown from "./Pages/Cooldown";
// import SecondPage from "./components/SecondPage";
import { AppContext } from "./context/Appcontext";
function App() {
  const [login,setlogin]=useState(false)

  // const {workoutdata,setworkoutdata} =useContext(AppContext);

  return (
   <>
   
      <div className="">
        <div className="main-landing w-screen h-screen overflow-hidden pt-5">
        <Navbar login={login} setlogin={setlogin} />
        <Routes>

          <Route path='/' element={<Home/> }></Route>
          <Route path='/tutorial' element={<GetTutorials /> }></Route>
          <Route path='/workout' element={<GetWorkout /> }></Route>
          <Route path='/customize' element={<GetCustomized/> }></Route>
          {/* <Route path='/warmup' element={<Warmup  /> }></Route>
          <Route path='/exercise' element={<Exercise /> }></Route>
          <Route path='/cooldown' element={<Cooldown /> }></Route> */}
          <Route path='/dashboard' element={login ? <Dashboard/>:<Login/> }></Route>
          <Route path='/userdata' element={<DataCollection/> }></Route>
          <Route path='/login' element={<Login login={login} setlogin={setlogin} /> }></Route>

        </Routes>

        
        </div>
        <div className="middle-page" >

        </div>
        <div className="second-page" >
         
        </div>

      <Footer/>
       
     
      </div>
   </>
  );
}

export default App;
