import React from "react";

function Cooldown({single})
{
    return (
        <>
        <div className="text-xl text-richblack-500 flex items-center gap-2 px-4 py-2 mt-2 ">
            {/* <p className="text-white curfont">🎖️ </p> */}
            <p><span className="text-[#01807d]">🎖️ Exercise :</span>   {single.Exercise}</p>
            <p><span className="text-[#01807d]">Time :</span> {single.Time}</p>

        </div>
        </>
    )

}
export default Cooldown;