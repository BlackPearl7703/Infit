import React, { useContext } from "react";
import {toast} from 'react-hot-toast'
import { useState } from "react";
import { AppContext } from "../context/Appcontext";
function DataCollection()
{
    const {userdata,setuserdata,reguser,setreguser} =useContext(AppContext);

    const [data,setdata]=useState({
        username:"",
        userage:"",
        usermob:"",
        usermsg:""

    })
    var id=1;
    async  function submitHandler(event)
    {
          event.preventDefault();
        //   console.log("form ka " ,data);
        //   console.log("global form ka " ,userdata);
          
          
       setuserdata([...userdata,{...data,"id":id }  ])
          id++;

        // console.log("global form ka " ,[...userdata,data]);
        setreguser(false);
        setdata({
            username:"",
            userage:"",
            usermob:"",
            usermsg:""
    
        })
        toast.success("registered successfully ✅✅")



        
    }
    function changeHandler(event)
    {
           
        setdata((prevdata)=>({
            ...prevdata,
            [event.target.name]:event.target.value
        }))
    }


   return(
    <>

<div className="flex flex-col justify-center items-center h-[80%] w-[100%]">
<div className=" buttonkafont text-bold text-[#01807d] underline text-4xl mb-5 mt-[11%]">
          Join The Race
        </div>
<form  onSubmit={submitHandler}
className="flex flex-col justify-center items-center glass gap-y-4 py-5 h-auto w-[50%]" >

    <label>
     <p>Enter Your Name</p>
     <input 
        className="bg-richblack-800 rounded-md text-richblack-5 w-full p-3 border border-richblack-700"
        required
                type="text"
                name="username"
                placeholder="e.g. Prince"
                value={data.username}
                onChange={changeHandler}
        >
     </input>

    </label>
    <label>
     <p>Age</p>
     <input 
        className="bg-richblack-800 rounded-md text-richblack-5 w-full p-3 border border-richblack-700"
        required
                type="number"
                name="userage"
                value={data.userage}
                placeholder="e.g. 20"
                onChange={changeHandler}
        >
     </input>

    </label>
    <label>
     <p>Mobile Number</p>
     <input 
        className="bg-richblack-800 rounded-md text-richblack-5 w-full p-3 border border-richblack-700"
        required
                type="number"
                name="usermob"
                value={data.usermob}
                placeholder="e.g. 722302xxxx"
                onChange={changeHandler}
        >
     </input>

    </label>
    <label>
     <p>Any special goal</p>
     <textarea 
        className="bg-richblack-800 rounded-md text-richblack-5 w-full p-3 border border-richblack-700"
        
                type="text"
                name="usermsg"
                value={data.usermsg}
                placeholder="e.g. i want to be fit forever!"
                onChange={changeHandler}
        >
     </textarea>

    </label>
    

    <button className="bg-[#01807d] buttonkafont rounded-md mb-6 px-3 py-2 mt-6 ml-2">Let's Start</button>

</form>
    </div>


    </>
   )
}

export default DataCollection;
