import React from "react";
import'bootstrap/dist/css/bootstrap.min.css';

function Footer(){
     return(
         <div>
           <p className="next-step">Next Step</p>
           <hr style={{marginLeft:"380px"}}></hr>
           <div className="row footer-container">

             <div className="col-5">
             <img src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/math_fundamentals-KD5NF3.png?width=92&quot"></img>
             <h4>Computer Science Fundamentals</h4>
             <p className="titleLine">The essential tools for mastering algebra, logic, and number theory!</p>
             </div>

             <div className="col-5">
             <img src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/cs_fundamentals-B2P79W.png?width=92&quot"></img>
             <h4>Computer Science Fundamentals</h4>
             <p className="titleLine">The essential tools for mastering algebra, logic, and number theory!</p>
             </div>

           </div>
         </div>
)}



export default Footer;