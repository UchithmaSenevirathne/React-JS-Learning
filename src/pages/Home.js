import React from 'react'
import TopicBox from "../components/TopicBox";
import Content from "../components/Content";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

export default function Home() {
    const Navigate = useNavigate();
    return (
        <div>
            <h1>HomePage</h1>
            {/*===========01,02,03 define topicbox,print variable values, calculations, arrays and show alerts============*/}
            {/*<TopicBox/>*/}
            {/*<Content/>*/}

            {/*=============04.handle props==================*/}
            {/*<TopicBox food="kottu" price="Rs 250">*/}
            {/*    <span>this is the description</span>*/}
            {/*</TopicBox>*/}
            {/*<TopicBox food="rice" price="Rs 350">*/}
            {/*    <button>button</button>*/}
            {/*</TopicBox>*/}
            {/*<TopicBox food="noodles" price="Rs 450">*/}
            {/*    <p>kjhihfiuhiuhvvi</p>*/}
            {/*</TopicBox>*/}

            {/*=============05.link pages=============*/}
            <Link to="/About">Go to About Page</Link>
            <br/>
            <Link to="/Contact">Go to Contact Page</Link>
            <br/>
            <Button onClick={() => Navigate("/About")}>
                About
            </Button>
            <br/>
            <br/>
            <Button onClick={() => Navigate("/Contact")}>
                Contact
            </Button>
        </div>
    )
}
