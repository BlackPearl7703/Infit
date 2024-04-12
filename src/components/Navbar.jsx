import React from "react"
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {toast,ToastContainer} from "react-hot-toast"
import {Link} from "react-router-dom"


function Navbar({login,setlogin})
{
  const notify = () => toast.warning("for admins only!");
    return(

        <div className="w-screen -mt-5 fixed  backdrop-blur-md z-20 flex flex-row py-4 justify-around items-center text-2xl text-[#c4cbc9] ">
           <div className="text-4xl tracking-wide  logofont opacity-100 text-[#01807d] select-none ">
              Infit
           
           </div>
           <ul className="flex justify-around gap-7 buttonkafont ">
           <Link to='/'
            class="text-[#c4cbc9] font-mullish  hover:text-white cursor-pointer transition-all duration-200 relative group"
          >
            <a href="#">Home</a>

            <div
              class="absolute bottom-0 w-full h-1 bg-[#01807d] hidden group-hover:block transition-all duration-200"
            ></div>
          </Link>
         { !login &&  <Link  to='/tutorial'
            class="text-[#c4cbc9] font-mullish  hover:text-white cursor-pointer transition-all duration-200 relative group"
          >
            <a href="#"> Tutorials</a>

            <div
              class="absolute bottom-0 w-full h-1 bg-[#01807d] hidden group-hover:block transition-all duration-200"
            ></div>
          </Link>

         }
        {
          !login &&  <Link to='/customize'
            class="text-[#c4cbc9] font-mullish  hover:text-white cursor-pointer transition-all duration-200 relative group"
          >
            <a href="#"> Customize workout plan</a>

            <div
              class="absolute bottom-0 w-full h-1 bg-[#01807d] hidden group-hover:block transition-all duration-200"
            ></div>
          </Link>
        }  
        {
          !login &&  <Link to='/workout'
            class="text-[#c4cbc9] font-mullish  hover:text-white cursor-pointer transition-all duration-200 relative group"
          >
            <a href="#">Workout plan</a>

            <div
              class="absolute bottom-0 w-full h-1 bg-[#01807d] hidden group-hover:block transition-all duration-200"
            ></div>
          </Link>
        }  
{
  !login &&     <Link to='/login'
            class="text-[#c4cbc9] font-mullish  hover:text-white cursor-pointer transition-all duration-200 relative group"
          >
            <a href=""  onClick={()=>toast("for admins only!!")}
            >Admin? </a>

            <div
              class="absolute bottom-0 w-full h-1 bg-[#01807d] hidden group-hover:block transition-all duration-200"
            ></div>
          </Link>
}



{
  login && <Link to='/dashboard'
  class="text-[#c4cbc9] font-mullish  hover:text-white cursor-pointer transition-all duration-200 relative group"
>
  <a href="#"  onClick={notify}
  >DashBoard </a>

  <div
    class="absolute bottom-0 w-full h-1 bg-[#01807d] hidden group-hover:block transition-all duration-200"
  ></div>
</Link>
}

{
  login && <Link to='/'
  class="text-[#c4cbc9] font-mullish  hover:text-white cursor-pointer transition-all duration-200 relative group"
>
  <a href="#"  onClick={()=>
  {
    setlogin(false)
    toast.success("logged out successfully!!")
  }

}
  >Log Out</a>

  <div
    class="absolute bottom-0 w-full h-1 bg-[#01807d] hidden group-hover:block transition-all duration-200"
  ></div>
</Link>
}


       



           
            
            
           </ul>
        </div>
    )

}
export default Navbar