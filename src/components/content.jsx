import React from "react";
import Card from "./Card"
import'bootstrap/dist/css/bootstrap.min.css';

function Content(){
    return(
        <div className="main-container">
    <div className="row">

        <div className="text-container col-md-6">
        <h1 className="text">Logic</h1>
       <h2>Stretch your analytic muscles with knights, knaves, logic gates, and more!</h2>

       <p className="classP">The beginning of our introductory math journey is Logic. Through these challenging problem solving exercises, you'll construct the critical thinking skills that are the basis for mathematical reasoning.
       </p>
       
       <p className="classP">
       You'll use limited information to make predictions – eliminating the impossible to uncover the truth. This course builds up to some truly mind-bending challenges!Read more
       </p>

       <a href="">View prerequisites and next steps</a> 
       </div>   
       
       <Card />
       
       </div>

    </div>
    )}


export default Content;