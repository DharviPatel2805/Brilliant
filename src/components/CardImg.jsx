import React from "react";
import CardComponent from "./CardComponent";
import'bootstrap/dist/css/bootstrap.min.css';


function CardImg(props){
    return(
      <div className="row">
         
         <CardComponent 
         imgURL = {props.img1}
         title={props.title1}
         titleLine={props.line1}
         />
          
         <CardComponent 
         imgURL = {props.img2}
         title={props.title2}
         titleLine={props.line2}
         />

         <CardComponent 
         imgURL = {props.img3}
         title={props.title3}
         titleLine={props.line3}
         />
        
        
        </div>
)}

export default CardImg;

{/* <div className="card col-md-2 col-lg-4 warmpup-div" style= {{width: "20rem"}}>
<img className="card-img-top brioche-bg" src={props.imgURL3} alt="Card cap"></img>
 <div className="card-body">
   <h4 className="card-text">{props.title3}</h4>
   <p>{props.line3}</p>
</div>
</div> */}