import React from 'react'
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";


export default function About() {
    const Navigate = useNavigate();
    return (
        <div>
            <h1>AboutPage</h1>
            <Button onClick={() => Navigate(-1)}>
                Back
            </Button>
        </div>
    )
}