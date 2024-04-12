import React from "react";
import './footer.css'
function Footer()
{
    return(
        <div className="w-screen glass  ">
<footer className="relative">
<div className="footer">
    <p className="select-none absolute text-3xl right-9 bottom-3 buttonkafont font-bold text-[#01807d] "> <span className=" text-3xl curfont text-white">Made with love 💫 <br></br></span>Prince Koshti</p>
<div class="row">
<a href="#"><i className="fa fa-code"></i></a>

<a href="#"><i className="fa fa-github"></i></a>

</div>

<div className="row">
<ul>
<li><a href="#">Contact us</a></li>
<li><a href="#">About Developer</a></li>
<li><a href="#">Privacy Policy</a></li>



</ul>
</div>

<div className="row">
Infit Copyright © 2024 - All rights reserved 
</div>
</div>
</footer>

        </div>
    )
}

export default Footer