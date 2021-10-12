import React, {useState} from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import {MdKeyboardArrowDown,MdKeyboardArrowUp} from 'react-icons/md'
import UseStateIteam2 from './UseStateIteam2'
import UseState from './UseState.css'

const Data3 = [
    {
        question: 'How does Parkname seperate itself from other domain name parking companies?',
        answer: 'Your domains are a valuable online property.As in any investment,you want the most efficient,easy way to make sure your property is going to be profitable.Do you own more than 1,000 domains?As a proffesional domainer,you will find everything you need through Parkname to generate maximum profits from your domain portfolio'
    },
    {
        question: 'Is Parkname Parking actually free?',
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        question: 'What do you do?',
        answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
        question: 'When was Parkname first founded?',
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
]


export const UseState2 = (props) => {

const [answers, setAnswers] = useState(false)
const showAnswers = () => {
    setAnswers(!answers)
}

return(
<div className="rows">
            <div className="title" onClick={showAnswers}>
                <div className='inline'>
                    <div className='icon'>
                        <AiOutlineUser />
                    </div>
                    <div className="block">
                        <h5>About Us</h5>
                        <small>4 articles in this Topic</small>
                    </div>
                    <button className='button'>
                    {answers ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </button>
                </div>
            </div>
            
            {answers ? <div className="faq">
                    {Data3.map((props) => {
                        return(
                            <UseStateIteam2
                            question={props.question} 
                            answer={props.answer} /> 
                        )
                    })}
                </div> : null
            }
</div>
)

}

export default UseState2;