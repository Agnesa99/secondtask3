import React, {useState} from "react";
import "./UseState.css";


function UseState () {
    const [show , setShow]=useState(true)
    return (
        <div className="UseState">
            <button onClick={()=> setShow (!show)}>Why Park a domain name in ParkName  ?                         </button>
            {
                show ? <p>Parkname is the leading industry standard for domain name parking and monetization sevices.We offer a wide variety of services to help you achieve        success.  </p> : null
            }
          
            <div classNaem="AboutUs">
                <button onClick={()=> setShow (!show)}> About us </button>
                {
                   show ? <p>How does Parkname seperate itself from other domain name parking companies?
                           </p> : null
                   
                   
            
                }
            
            </div>
            
        </div>
    ) 
}

  
    

 

export default UseState;