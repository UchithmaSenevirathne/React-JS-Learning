import logo from './logo.svg';
import React, {useEffect, useState} from "react";
import './App.css';
import Home from "./pages/Home";
import TopicBox from "./components/TopicBox";
import {Accordion} from "react-bootstrap/Accordion";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
    // ===06,09===
    // let count = 0;   //is not using
    const [count, setCount] = useState(0);

    //to increment
    const increment = () =>{
        setCount(count+1)
    }

    //to decrement
    const decrement = () =>{
        setCount(count-1)
    }

    // =====08==========
    // function buttonClick(){
    //     console.log("button clicked")
    //     alert("button clicked")
    // }

    //
    useEffect(() => {
        //what i want to do as a side effect
        console.log(`new count is: ${count}`)
    }, [count] //dependancy array
    );
  return (
      <div>
          {/*====01,02,03,04====*/}
          {/*<Home/>*/}

          {/*=======05==============*/}
          <h1>Static Content</h1>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="/About" element={<About/>}></Route>
                  <Route path="/Contact" element={<Contact/>}></Route>
              </Routes>
          </BrowserRouter>

          {/*=======06.usestate=====*/}
          {/*<>*/}
          {/*    <span className="title">My Counter</span>*/}
          {/*    <p className="subtitle">the count is {count}</p>*/}
          {/*    <button className="button" onClick={decrement}>-</button>*/}
          {/*    <button className="button" onClick={increment}>+</button>*/}
          {/*</>*/}

          {/*==========07.using react bootstrap components========*/}
          {/*<h1>react bootstrap</h1>*/}
          {/*......component code here......*/}
          {/*script and stylesheet must write in the index.html file*/}

          {/*===========08.React Event handling==============================*/}
          {/*<h1>react event handling</h1>*/}
          {/*<br/><hr/>*/}
          {/*<button onClick={buttonClick}>Click Here</button>*/}

          {/*==========09.useEffect Hook==========*/}
          {/*<h1>Count: {count}</h1>*/}
          {/*<button className="button" onClick={decrement}>-</button>*/}
          {/*<button className="button" onClick={increment}>+</button>*/}
      </div>
  )
}

export default App;
