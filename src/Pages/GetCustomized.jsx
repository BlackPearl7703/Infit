import React ,{useState ,useContext} from "react";
import axios from 'axios';
import WorkType from "./WorkoutType";


function GetWorkout()
{
    
    console.log("hello")

   
    const [workoutdata1,setworkoutdata1]=useState({});
    

    const [workdata,setworkdata]=useState({
        time:"",
        muscle:"",
        level:"",
        equipment:"",
        goal:""

    })
    // const [workoutdata,setworkoutdata]=useState({});
    const [search,setsearch]=useState(true);

   async function Fetchworkoutdata(time,mus,level,equip,goal)
    {
     

      const options = {
        method: 'GET',
        url: 'https://workout-planner1.p.rapidapi.com/customized',
        params: {
          time: `${time}`,
          equipment: `${equip}`,
          muscle: `${mus}`,
          fitness_level: `${level}`,
          fitness_goals: `${goal}`
        },
        headers: {
          'X-RapidAPI-Key': '436041b323mshf3d75a2e5cd8440p182386jsn2469ee622b8d',
          'X-RapidAPI-Host': 'workout-planner1.p.rapidapi.com'
        }
      };
      
      try {
         const response = await axios.request(options);
         console.log(response.data);
         setworkoutdata1(response.data)
      } catch (error) {
         console.error(error);
      }
    }

    function changeHandler(event)
    {
           
        setworkdata((prevdata)=>({
            ...prevdata,
            [event.target.name]:event.target.value
        }))
    }

    function submitHandler(event)
    {
        event.preventDefault();
        Fetchworkoutdata(workdata.time,workdata.muscle,workdata.level,workdata.equipment,workdata.goal);
        setsearch(false);
        console.log("printing workout data",workoutdata1);
    }
    return (
        <>

        <div className="h-screen w-screen flex justify-center items-center ">

            {
                search ?(
                    <div className=" ">

<form  onSubmit={submitHandler}
className="flex flex-col justify-center glass px-9 items-center  gap-y-4 py-1 " >
<div className=" buttonkafont text-bold text-center  text-3xl mb-1 mt-5 text-[#01807d] ">
         Train Yourself
         
        </div>
    <label>
     <p>Muscle to train</p>
     <input 
        className="bg-richblack-800 rounded-md text-richblack-5 w-full p-3 border border-richblack-700"
        required
                type="text"
                name="muscle"
                placeholder="e.g. biceps"
                value={workdata.muscle}
                onChange={changeHandler}
        >
     </input>

    </label>
    <label>
     <p>Time you have </p>
     <input 
        className="bg-richblack-800 rounded-md text-richblack-5 w-full p-3 border border-richblack-700"
        required
                type="text"
                name="time"
                value={workdata.time}
                placeholder="e.g. 20 min"
                onChange={changeHandler}
        >
     </input>

    </label>
    <label>
     <p>What's your level</p>
     <input 
        className="bg-richblack-800 rounded-md text-richblack-5 w-full p-3 border border-richblack-700"
        required
                type="text"
                name="level"
                value={workdata.level}
                placeholder="e.g. beginner"
                onChange={changeHandler}
        >
     </input>

    </label>
    <label>
     <p>Equipment you have</p>
     <input 
        className="bg-richblack-800 rounded-md text-richblack-5 w-full p-3 border border-richblack-700"
        
                type="text"
                name="equipment"
                value={workdata.equipment}
                placeholder="e.g. dumble!"
                onChange={changeHandler}
        >
     </input>

    </label>
    <label>
     <p>What's your goal</p>
     <input 
        className="bg-richblack-800 rounded-md text-richblack-5 w-full p-3 border border-richblack-700"
        
                type="text"
                name="goal"
                value={workdata.goal}
                placeholder="e.g. strength"
                onChange={changeHandler}
        >
     </input>

    </label>
    

    <button className="bg-[#01807d] buttonkafont rounded-md mb-6 px-3 py-2 mt-6 ml-2">Let's Start</button>

</form>

                    </div>
                ):
                (
                   
                   workoutdata1?.length===0 ?
                   (
                    <div className="text-3xl text-white">
                    no data
                   </div>
                   ):
                   (
                      
                         <WorkType workoutdata1={workoutdata1}/>
               
                    //   {console.log(workoutdata)}
                )
                // <div>
                //     hello
                // </div>
                   
                )




            }
           

        </div>
        
        
        
        </>
    )
}

export default GetWorkout;