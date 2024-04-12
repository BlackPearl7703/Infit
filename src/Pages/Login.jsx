import React from "react";

import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate,NavLink } from "react-router-dom";
// import Landing from "../components/Landing";
import {toast} from 'react-hot-toast'
import { useState } from "react";
function Login({login,setlogin})
{
    const navigate = useNavigate();
    const [formdata,setformdata]=useState({
        email:"",
        password:""
    })
    const [showpassword,setshowpassword]=useState(false);



    function submitHandler(event)
    {
        event.preventDefault();
           console.log(formdata)

        if(formdata.email =='princekoshti7703@gmail.com' && formdata.password=='123')
        {
            setlogin(true);
            toast.success("logged in successfully")
            navigate('/dashboard')
        }
        else 
        {
            toast("invalid credentials!!")
        }

    }

    function changeHandler(event)
    {
          setformdata((prev)=>(
            {
                ...prev,
                [event.target.name]:event.target.value
            }
          ))
      

    }
   return (
    <div className="flex flex-col justify-center items-center h-[80%] w-[100%]">

<div className=" buttonkafont text-bold  text-[#01807d] text-3xl mb-5 mt-20">
          System Login
        </div>
  <form onSubmit={submitHandler}
  className="flex flex-col justify-center items-center glass gap-y-4 py-5 h-auto w-[50%]">
      <label className="mt-10">
                <p className="text-[0.875rem] text-richblack-5 leading-3 mb-2 "
                >Email Address<sup className="text-pink-200">*</sup> </p>
                <input
                required
                type="email"
                name="email"
                placeholder="enter email address"
                onChange={changeHandler}
                // value={4}
                className="bg-richblack-800 rounded-md text-richblack-5 w-full p-3 border border-richblack-700"
                >

                </input>
            </label>
            <label className="relative">
                <p className="text-[0.875rem] text-richblack-5 leading-3 mb-2"  >Password<sup className="text-pink-200">*</sup> </p>
                <input
                required
                type={showpassword?("text"):("password")}
                name="password"
                placeholder="enter password"
                onChange={changeHandler}
                value={formdata.password}
                className="bg-richblack-800 rounded-md text-richblack-5 w-full p-3 border border-richblack-700"
                >

                </input>

                {/* <span onClick={  showHandler}>
                    {showpassword ?(<AiOutlineEye/>):(<AiOutlineEyeInvisible/>)}
                </span> */}
                <span  className="absolute top-[35px] right-3 cursor-pointer"
                onClick={()=>  setshowpassword((prev)=>!prev)}>
                    {showpassword ?(<AiOutlineEye fontSize={24} fill="black"/>):(<AiOutlineEyeInvisible fontSize={24} fill="black"/>)}
                </span>

                <Link to='#'>
                <p className="text-xs mt-1  text-red-900 max-w-max ml-auto font-semibold">
                    Forget Password
                </p>
                </Link>
            </label>
   

           
              <button className="bg-[#01807d] buttonkafont rounded-md mb-6 px-3 py-2 mt-6 ml-2">Login</button>
  </form>
    </div>
   )
}

export default Login