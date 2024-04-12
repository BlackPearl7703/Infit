import React ,{useState} from "react";

function MuscleCard({mus})
{
    return (
      <div className="flex justify-center  items-center ">

     
        <div className=" glass w-[50%]  flex flex-col px-4 py-2 gap-2 pb-4  text-black">
          <p className=" text-3xl">  <span className="text-4xl curfont font-bold text-white"> for {mus.Muscles} muscles</span>  </p>
          <hr />
          <p>  <span className="text-[0.5xl] text-[#ffa116] font-bold ">Workout : </span>{mus.WorkOut}</p>
          <hr />
          {/* <p>{mus.Intensity_Level}</p> */}
          {/* <hr /> */}
          <p> <span className="text-[0.5xl] text-[#ffa116] font-bold ">For Beginner : </span>{mus['Beginner Sets']}</p>
          <hr/>
          <p><span className="text-[0.5xl] text-[#ffa116] font-bold ">For Intermediates : </span>{mus['Intermediate Sets']}</p>
          <hr />
          <p><span className="text-[0.5xl] text-[#ffa116] font-bold ">For Advanced : </span>{mus['Expert Sets']}</p>
          <hr />
          <p><span className="text-[0.5xl] text-[#ffa116] font-bold ">Equipment : </span>{mus['Equipment']}</p>
          <hr />
          <p><span className="text-[0.5xl] text-[#ffa116] font-bold ">How to do : <br /> </span>{mus['Explaination']}</p>
          <hr />
          <p className="max-h-[150px] overflow-y-scroll overflow-x-hidden"><span className="text-[0.5xl]  text-[#ffa116] font-bold ">More detailed: <br /> </span>{mus['Long Explanation']}</p>
          <hr />
        <button className="mt-4" > <a className="bg-[#01807d] text-white buttonkafont rounded-md px-3 py-2  ml-2 inline"
          href= {`${mus['Video']}`} target="blank" >Watch tutorial  </a></button> 
        </div>
        </div>
    )
}
export default MuscleCard