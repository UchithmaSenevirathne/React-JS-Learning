import React from 'react'
import './topicbox.css'

export default function TopicBox(props) {
    // ===02===
    // const topic = "My favorite food is kottu"
    // const item = " and rice"
    //
    // const a = 10;
    // const b = 20;
    // const c = a+b;

    // ===03===
    // const foodPrices = {kottu:"250", rice:"350"}
    return (
        <div>
            <div className="topicBox">
                {/*==========01. define topicbox===============*/}
                {/*<span className="text">This is topic box</span>*/}

                {/*==========02. print variable values, calculations, arrays and show alerts==================*/}
                {/*<span className="text">{topic} {item} {c} {alert("hello")} {[10, 20, 30]}</span>*/}

                {/*==========03. object are not valid as a react child======*/}
                {/*<span className="text">{foodPrices}</span>*/}

                {/*===========04.handle props==================*/}
                <span className="text">My favorite food is {props.food} the price is {props.price}</span>
                {props.children}
            </div>
        </div>
    )
}