import React from "react"
import {Link} from "react-router-dom"
function Landing()
{
    return (
        <div className=" h-screen w-screen flex flex-col  justify-center items-center"
        >
           
            
            <div className="w-[520px] -ml-[45rem] flex flex-col items-start justify-center   text-white  text-3xl ">
                  <p className="font-rubik-scribble font-bold -leading-[1.25rem]  space-x-5" >Don’t give up on your  <span className="text-red-500">Dreams</span>, or your <span className="text-[#01807d]">Dreams</span> will give up on you.¨ 
               <br />   </p>
               <div className="w-full flex justify-end">

               <span className=" text-3xl  text-richblack-100 curfont -mt-4 mr-[7rem]">– John Wooden</span>
               </div>

            
               <Link to='/userdata' className="bg-[#01807d] buttonkafont rounded-md px-2 py-1 mt-6 ml-2">Join Now</Link>
            </div>
          
        </div>
    )

}
export default Landing