import React from "react";
import "./Productmegamenu.css";
import { Data1 } from "./Data1";

function Productmegamenu() {
    return (
            <div className="items2">
                {Data1.map((props) => {
                    return(
                        <div className='item2'>
                                <h6>{props.title}</h6>
                                <p>{props.data}</p>
                                <p>{props.description}</p> 
                                <div className='button'>
                                    <button type='button'>Buy Now</button>
                                </div>
                        </div>
                    )
                })}
            </div>

    )

}

export default Productmegamenu;