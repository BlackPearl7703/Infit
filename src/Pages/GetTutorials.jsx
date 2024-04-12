import React ,{useState} from "react";
import axios from 'axios';
import {toast,ToastContainer} from "react-hot-toast"
import MuscleCard from "./MuscleCard";
function GetTutorials()
{
  const [search,setsearch]=useState(true);
  const [confused,setconfused]=useState(false);
  const [muscle,setmuscle]=useState("");
  const [muscledata,setmuscledata]=useState([]);
  const [curpage,setcurpage]=useState(1);
  const [totalpages,settotalpages]=useState(0);
  function confHandler()
  {
    setconfused(!confused);
  }
  function changeHandler(event)
  {
   setmuscle(event.target.value);
  }
   function submitHandler(event)
  {
      event.preventDefault();
      FetchData(muscle);
      setsearch(false);
      console.log("printing muscle data",muscledata)
  }

  function incHandler()
  {
    if(curpage!=totalpages)
    setcurpage(curpage+1);
     else
     setcurpage(1);

     toast(`${curpage+1} of ${totalpages}`)
  }
  function decHandler()
  {
    if(curpage!=1)
    setcurpage(curpage-1);
     else
     setcurpage(totalpages);
     toast(`${curpage-1} of ${totalpages}`)
  }



   async function FetchData(muscle)
    {
       

const options = {
  method: 'GET',
  url: 'https://work-out-api1.p.rapidapi.com/search',
  params: {Muscles: `${muscle}`},
  headers: {
    'X-RapidAPI-Key': 'e1aa14092bmsh46a7b7297d0ff9fp1a1491jsn9956860de603',
    'X-RapidAPI-Host': 'work-out-api1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
  
	console.log(response.data);
	console.log(typeof(response.data));
  setmuscledata(response.data);
  settotalpages(response.data.length);
 
} catch (error) {
  toast.error("Server not responding !!")
	console.error(error);
}


    }
    // FetchData("biceps");
    return (
        <div className="min-h-[70vh] w-screen  flex  items-end justify-center ">
        
        <div className="  ">
           {
            search ?
            (
              <form 
               className="flex gap-4 relative">


             
              <div className="glass text-center  py-4 px-5  text-[#01807d]    flex flex-col  items-center justify-center" >
        
              
              <p className="buttonkafont text-4xl ">It's Your Time </p>
              <label className="relative">
                <img src="/assets/804845.jpg" width="400px" alt="" />

                <input 
                className=" absolute left-[20%] top-[20%] rounded-md px-3 py-2 text-center text-richblack-500  "
                type="text"  
                name="ipquery" 
                
                onChange={changeHandler}

                placeholder="enter muscle name"
                
              />
                <button 
                onClick={submitHandler}
                className="absolute top-[50%] left-[40%] bg-[#01807d]
                 buttonkafont rounded-md px-2 py-1 mt-6 ml-2 text-white ">Proceed</button>
              </label>
              
              <p  onClick={confHandler}
              className="text-right mt-3 underline text-black cursor-pointer hover:text-red-800 transition-all duration-100">Confused?</p>

   
   
              </div>

{
  confused ?
  (<div className="glass px-2 py-3 absolute -right-[90%] top[-1rem] text-center">
  <h2 className="buttonkafont  text-[#01807d] ">Try these options</h2>
  <ul className="flex flex-col gap-2 px-3 text-white ">
    <li>Biceps</li>
    <li>Triceps</li>
    <li>Chest</li>
    <li>Back</li>
    <li>Legs</li>
    <li>Abs</li>
    <li>Stretching</li>
    <li>Warm Up</li>
    <li>Lats</li>
    <li>Hamstring</li>
    <li>Calves</li>
    <li>Quadriceps</li>
    <li>Trapezius</li>
    <li>Shoulders</li>
    <li>Glutes</li>
  </ul>

</div>)
  :
  (<div >
    
  </div>)
}




              </form>
            ):
            (
              // api call data
              muscledata.length==0?
              (<div className="text-5xl text-white">No data found</div>):
              (
                // muscledata.map((mus)=>(
                  
                //     <MuscleCard mus={mus} />
                  
                // ))
                <div className="flex flex-col h-screen justify-center items-center">
                  <MuscleCard mus={muscledata[curpage-1]} />
                <div className="flex text-white text-xl justify-start">
          
             {
                curpage!=1 
                &&  
                <button onClick={decHandler}
                 className="mt-4 bg-[#01807d] text-white buttonkafont rounded-md px-3 py-2  ml-2 inline">
               prev </button>

             }   
{
  curpage!=totalpages 
  && 
  <button  onClick={incHandler}
               className="mt-4 bg-[#01807d] text-white buttonkafont rounded-md px-3 py-2  ml-2 inline">
               next </button>
}


               
                </div>
                </div>

               
            )


            )

           
           }

        </div>
        
        
        </div>
    )
}

export default GetTutorials;