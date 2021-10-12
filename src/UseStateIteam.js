import React from 'react'

import {Data2} from './Data1'
import UseState from './UseState'
import  './UseState.css'

const UseStateIteam =() => {
    return (
        <div className='usestateiteam'>
        {Data2.map((props) => {
            return(
                
                <UseState question={props.question} answer={props.answer}  answer2={props.answer2}  answer3={props.answer3}  answer4={props.answer4}/>
               
               
         
            )
        })

        }
        </div>
    )
}


export default UseStateIteam