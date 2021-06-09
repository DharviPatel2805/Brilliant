import React from "react";
import'bootstrap/dist/css/bootstrap.min.css';

function Card(){
    return(
       <div className="col-md-4 card-main">
        <div className="card-container">
         <img className="brioche-bg" src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=254&quot" alt="brioche-logo"></img>

         <div className="row stats">
            <div className="col-3">37</div>
            <div className="col-3" style={{paddingLeft: "80px"}}>265+</div>
        </div>
            <div className="d-grid gap-2 col-10 mx-auto">
              <button className="btn btn-dark btn-lg" type="button">Continue Course</button>
            </div>
      </div>   
       </div> 
    )
}


export default Card;