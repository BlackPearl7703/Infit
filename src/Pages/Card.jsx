import React, { useContext } from "react";
import {toast} from 'react-hot-toast'
import { useState } from "react";
let i=0;
function Card({props})
{
    console.log("props print ",props);
    i++;
     const a=i;
   return (
    <div>

    <div className="text-xl  mt-2 mb-2 rounded-md bg-[rgba(0,0,0,0.5)] flex items-center gap-10 justify-around min-w-full px-4 py-2 text-white ">
        {/* <p text-3xl text-white>helloo</p> */}
       
      <p text-xl text-white>{props.id}.</p>
      <p className="w-[150px]" >{props.username}</p>
      <p  className="w-[50px]">{props.userage}</p>
      <p  className="w-[100px] mr-5">{props.usermob}</p>
      <p className=" max-w-[200px] text-[1rem]"  >{props.usermsg}</p>
    </div>
    </div>
   )
  
}

export default Card;