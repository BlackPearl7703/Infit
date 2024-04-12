import React, { useContext } from "react";
import {toast} from 'react-hot-toast'
import { useState } from "react";
import { AppContext } from "../context/Appcontext";
import Card from "./Card";
// import Img from "../assets/461075.jpg";

function Dashboard()
{

    

    const {userdata,setuserdata,reguser,setreguser} =useContext(AppContext);
    
         

   return (
    <div className=""> 

    <div className=" relative h-screen w-screen flex flex-col items-center   text-3xl text-[#d1fffe]">
    <div className=" buttonkafont text-bold  text-3xl mb-5 mt-20">
          Registered Users
         
        </div>
      {
        reguser?(
                <div className="text-3xl text-red-500 glass h-auto">
                    <img className="" width="400px"  src={"/assets/nodata.png"} alt="no data found"  />
                  
                </div>
        ):(
              <div className=" py-2 px-4  flex flex-col items-center justify-center min-w-0 glass min-h-[20%]">
     
      {
          userdata.map((user) => (
                 <Card props={user} />
          ))
    }  

    </div>

        )

      } 
       
   


    </div>
    </div>
   )
}

export default Dashboard;