import React ,{useState}from "react";
import { Link } from "react-router-dom";
import Warmup from "./Warmup";
import Exercise from "./Exercise";
import Cooldown from "./Cooldown";
import {toast} from 'react-hot-toast'
function WorkType({workoutdata1})
{

    console.log("inside type ",workoutdata1)
    const [showopt,setshowopt]=useState(true);
    const [way,setway]=useState(4);
    function warmHandler()
    {
        console.log("warm handler call");
        setway(1);
        toast.success("getting ready!")
        console.log( workoutdata1['Warm Up']);
        //   setshowopt(false)
        // setshowopt(false);
    }
    function exerciseHandler()
    {
        setway(2)
        toast.success("grind mode on!")
        // setshowopt(false);
       
    }
    function coolHandler()
    {
        // setshowopt(false);
        toast.success("smooth bro smooth!")
        setway(3)
       
    }
   return (
    <>
     <div className="h-screen w-screen flex flex-col justify-center items-center">

    {
showopt && 
<div className="glass">

           

        
     <div className=" buttonkafont text-bold text-center  text-3xl mb-1 mt-5 text-[#01807d] ">
      It's Your Choice
        </div>
        <div className="flex gap-3 px-5 py-5 ">
       
       
       
       
       
       
           <button 
              onClick={warmHandler}
            className="bg-[#01807d] buttonkafont rounded-md px-2 py-2 mt-6 ml-2"
            >Warmup
                
            </button>
            <button 
               onClick={exerciseHandler}
            className="bg-[#01807d] buttonkafont rounded-md px-2 py-2 mt-6 ml-2"
            >Exercise
                
            </button>
            <button 
               onClick={coolHandler}
            className="bg-[#01807d] buttonkafont rounded-md px-2 py-2 mt-6 ml-2"
            >Cooldown
                
            </button>
            

            

        </div>
        </div>

    }   

    {
    (way===1) && 
        <div className="">
        <div className=" buttonkafont text-bold text-[#01807d] text-center text-3xl mb-5 mt-20">
        WARMUP
       
      </div>
        <div className="glass flex flex-col px-2 py-3">
            
            {
                
        (
            
            workoutdata1['Warm Up'].map((data)=>
          {
             return <Warmup single={data}/>
          })
        )
            }
        </div>
        </div>
        
    }
    {
    
    (way===2) && 
        <div className="">
        <div className=" buttonkafont text-bold text-[#01807d] text-center text-3xl mb-5 mt-20">
        EXERCISE
       
      </div>
        <div className="glass flex flex-col px-2 py-3">
            
            {
                
        (
            
            workoutdata1['Exercises'].map((data)=>
          {
             return <Exercise single={data}/>
          })
        )
            }
        </div>
        </div>
        
    }
    {
    
    (way===3) && 
        <div className="">
        <div className=" buttonkafont text-bold text-[#01807d] text-center text-3xl mb-5 mt-20">
        COOLDOWN
       
      </div>
        <div className="glass flex flex-col px-2 py-3">
            
            {
                
        (
            
            workoutdata1['Cool Down'].map((data)=>
          {
             return <Cooldown single={data}/>
          })
        )
            }
        </div>
        </div>
        
    }

   



         
     </div>

    
    
    </>
   )


}

export default WorkType;