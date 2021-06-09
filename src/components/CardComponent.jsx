import React,{ useState } from "react";
import'bootstrap/dist/css/bootstrap.min.css';
import { Divider } from "@material-ui/core";



function CardComponent(props){

  const [isMouseOver, mouseOver] = useState(false)

  function handleMouseOver(){
    mouseOver(true);
  }

  function handleMouseOut(){
    mouseOver(false);
  }

  return(
    <div className="card col-md-2 col-lg-4 warmpup-div" style= {{width: "18rem"}}>
          <img className="card-img-top brioche-bg-2" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style= {{opacity: isMouseOver ? "0.2" : "1"}} src={props.imgURL} alt="Card cap"></img>
           <div className="card-body" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style= {{opacity: isMouseOver ? "0.2" : "1"}}>

             {isMouseOver ? <h4>Included with Brilliant Premium</h4> :
                <div>
               <h4 className="card-text">{props.title}</h4>
               <p className="titleLine">{props.titleLine}</p>
               </div>}

             <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
               </div>
          </div>
    </div>
  )
}

export default CardComponent;
