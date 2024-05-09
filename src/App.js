// import logo from './logo.svg';
// import React, {useEffect, useState} from "react";
// import './App.css';
// import {Fragment} from "react";
// import Home from "./pages/Home";
// import TopicBox from "./components/TopicBox";
// import {Accordion} from "react-bootstrap/Accordion";
// import {BrowserRouter, Route, Routes} from "react-router-dom";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Main from "./components/Main";
//
// // ===========11===================
// //export default use karama
// // import myData from "./Data/myData";
//
// //export witharak dammama
// import {myData} from "./Data/myData";
// // import {myData2} from "./Data/myData";
//
// // const MainBlock = myData.map(({name, city}, index)=>{
// //     return <Main key={index} name={name} city={city}/>;
// // })
//
// // const NewBlock = () => {
// //     return(<Fragment>
// //         {myData?.map(({name, city}, index)=>{
// //             return <Main key={index} name={name} city={city}/>;
// //         })}
// //     </Fragment>)
// // }
//
// // =====13================
// // let myVar = 'uchi'
//
// function App() {
//     // =========13=================
//     // const [myVar, setMyVar] = useState(
//     //     {
//     //         name: 'uchi',
//     //         city: 'galle',
//     //     }
//     // );
//
//     // const [myDataState, setMyDataState] = useState(myData)
//
//     // =====14==========
//     const [inputVal, setInputVal] = useState(0)
//
//     const clickHandle = () =>{
//         //=====13====
//         // myVar = 'pavan'
//         // setMyVar({
//         //     // spread operator use krl vales okkoma ganna puluwan,eetapasse
//         //     // ,ekk dala change kranna ona value eka denawa.
//         //     // myVar values tika methanata spread kranna kyl ...myVar eken kynawa
//         //     ...myVar,
//         //     name: "pavan",
//         // });
//
//         // setMyDataState([...myDataState, {
//         //     name: 'kumara',
//         //     city: 'galle',
//         //     image: 'https://nationaltoday.com/wp-content/uploads/2021/10/national-teddy-bear-day.jpg',
//         // }])
//
//         // ====15.increase value when click=========
//         setTimeout(()=>{
//             console.log("i am clicked")
//             setInputVal((pre) => {
//                 if(pre<1){
//                     return pre+1;
//                 }else if(pre<2){
//                     return pre+3;
//                 }else{
//                     return pre+2;
//                 }
//             });
//         },3000);
//         // setInputVal(inputVal + 1);
//     };
//     console.log(inputVal);
//
//     const mainBlock = myData.map(({name, city, image}, index)=>{
//         return <Main key={index} name={name} city={city} image={image}/>;
//     })
//
//     // ===06,09===
//     // let count = 0;   //is not using
//     // const [count, setCount] = useState(0);
//
//     //to increment
//     // const increment = () =>{
//     //     setCount(count+1)
//     // }
//
//     //to decrement
//     // const decrement = () =>{
//     //     setCount(count-1)
//     // }
//
//     // =====08==========
//     // function buttonClick(){
//     //     console.log("button clicked")
//     //     alert("button clicked")
//     // }
//
//     //
//     // useEffect(() => {
//     //     //what i want to do as a side effect
//     //     console.log(`new count is: ${count}`)
//     // }, [count] //dependancy array
//     // );
//
//     // =14---> using arrow function=
//     const inputChangeHandle = (event,data)=>{
//         event.preventDefault()
//         console.log(data)
//         setInputVal(event.target.value)
//     }
//   return (
//       <div className="main_container">
//           <div>
//               {/*====01,02,03,04====*/}
//               {/*<Home/>*/}
//
//               {/*=======05==============*/}
//               {/*<h1>Static Content</h1>*/}
//               {/*<BrowserRouter>*/}
//               {/*    <Routes>*/}
//               {/*        <Route path="/" element={<Home/>}></Route>*/}
//               {/*        <Route path="/About" element={<About/>}></Route>*/}
//               {/*        <Route path="/Contact" element={<Contact/>}></Route>*/}
//               {/*    </Routes>*/}
//               {/*</BrowserRouter>*/}
//
//               {/*=======06.useState hook=====*/}
//               {/*<>*/}
//               {/*    <span className="title">My Counter</span>*/}
//               {/*    <p className="subtitle">the count is {count}</p>*/}
//               {/*    <button className="button" onClick={decrement}>-</button>*/}
//               {/*    <button className="button" onClick={increment}>+</button>*/}
//               {/*</>*/}
//
//               {/*==========07.using react bootstrap components========*/}
//               {/*<h1>react bootstrap</h1>*/}
//               {/*......component code here......*/}
//               {/*script and stylesheet must write in the index.html file*/}
//
//               {/*===========08.React Event handling==============================*/}
//               {/*<h1>react event handling</h1>*/}
//               {/*<br/><hr/>*/}
//               {/*<button onClick={buttonClick}>Click Here</button>*/}
//
//               {/*==========09.useEffect Hook==========*/}
//               {/*<h1>Count: {count}</h1>*/}
//               {/*<button className="button" onClick={decrement}>-</button>*/}
//               {/*<button className="button" onClick={increment}>+</button>*/}
//
//               {/*============10.object structuring=====*/}
//               {/*<Main name="uchi" city="matara" position="dev"/>*/}
//           </div>
//           <div>
//               <h1>{inputVal}</h1>
//           </div>
//
//           {/*========11.array looping========*/}
//           {/*{myData.map(({name, city}, index)=>{*/}
//           {/*    return <Main key={index} name={name} city={city}/>;*/}
//           {/*})}*/}
//
//           {/*<NewBlock/>*/}
//
//           {/*=========12.add css===========*/}
//           <div className="mainBlock_container">
//               {mainBlock}
//           </div>
//           <br/>
//
//           {/*=====13.inline styling and change variable by click btn using onclick===*/}
//           {/*inline style deddi object widiyt danne*/}
//           <button style={
//               {
//                   fontSize: '12px',
//                   border: '1px solid red',
//                   padding: '7px 12px',
//               }
//           } onClick={clickHandle}>Click Me
//           </button>
//
//           <br/>
//           {/*==========14.onChange======================*/}
//           {/*<input type='text' style={*/}
//           {/*    {*/}
//           {/*        border: '1px solid red',*/}
//           {/*        fontSize: '14px',*/}
//           {/*        padding:'7px',*/}
//           {/*    }*/}
//           {/*} placeholder="type what you want"*/}
//           {/*       // using annonymous function*/}
//           {/*// onChange={(e)=>{*/}
//           {/*//     e.preventDefault()*/}
//           {/*//     setInputVal(e.target.value)*/}
//           {/*// }}*/}
//
//           {/*    // using arrow functions*/}
//           {/*onChange={(e)=>{*/}
//           {/*    inputChangeHandle(e, inputVal)*/}
//           {/*}}*/}
//
//           {/*/>*/}
//
//       </div>
//   );
// }
//
// export default App;

// ==========15=======01.prac - usage of useState===============================================

import {Fragment, useEffect, useState} from "react";
import './App.css';
import Unit from "./components/Unit";
import Header from "./components/Header";

const App = () => {
    // state keepayak use krl
    // const [imageUrl, setImageUrl] = useState('');
    // const [name, setName] = useState('');
    // const [city, setCity] = useState('');

    // state keepayak hadanne nathuwa wade karanna
    const [inputData, setInputData] = useState({
        imageUrl:'',
        name:'',
        city:'',
    })


    const [myData, setMyData] = useState([])

    // console.log(myData);

    // ==================17.usage of useEffect=============================
    // server side ekt request yaddi useweno.data ekk change wuna gamn ekt anuwa request yanna

    // useEffect(() => {
    //     console.log('use effect calling..')
    // }, [inputData.name, inputData.city]);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    // width wenas karaddi wenas wenna
    useEffect(() => {
        const changeWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', changeWindowWidth);

        console.log('use effect calling');

        // ========cleanup process====
        return ()=>{
            console.log('use effect cleanup function running')

            window.removeEventListener('resize', changeWindowWidth)
        }
    }, [inputData.name]);

    return(
        <div>
            {/*=16=======02.prac - responsive nav bar===========*/}
            <Header/>
            {/*======*/}
            <div className="main_container">
                <h1>{windowWidth}</h1>
                <div className="main_left">
                    <input type='text' value={inputData.imageUrl} placeholder='imageUrl' onChange={(e)=>{
                        e.preventDefault()
                        setInputData(preInputData=>({
                           ...preInputData,
                           imageUrl: e.target.value
                        }));
                    }}/>
                    <input type='text' value={inputData.name} placeholder='your name' onChange={(e)=>{
                        e.preventDefault()
                        setInputData(preInputData=>({
                            ...preInputData,
                            name: e.target.value
                        }));
                    }}/>
                    <input type='text' value={inputData.city} placeholder='your city' onChange={(e)=>{
                        e.preventDefault()
                        setInputData(preInputData=>({
                            ...preInputData,
                            city: e.target.value
                        }));
                    }}/>
                    <button onClick={()=>{
                        // console.log({
                        //     imageUrl,
                        //     name,
                        //     city,
                        // });
                        setMyData((pre)=>[
                            ...pre,
                            {
                                image: inputData.imageUrl,
                                name: inputData.name,
                                city: inputData.city,
                            },
                        ]);

                        // 1 kramaya- input fields clear karanna
                        setInputData((pre)=>{
                            if(pre.imageUrl.length>0){
                                return {
                                    ...pre,
                                    imageUrl: ''
                                };
                            }else{
                                return pre;
                            }
                        });

                        // above 1 kramayama short krl| 'pre' use karana eka athyawashya na.pre wenuwata onekak danna puluwan
                        setInputData((uchi)=> (uchi.name.length>0 ? ({
                            ...uchi,
                            name: '',
                        }) : uchi));
                        setInputData((preCity)=>(preCity.length>0 ? ({
                            ...preCity,
                            city: '',
                        }) : preCity));

                    }}>Submit</button>
                </div>
                <div className="main_right">
                    {myData?.map(({image,name,city}, index)=> <Unit
                        image={image}
                        name={name}
                        city={city}
                        key={index}
                    />)}
                </div>
            </div>

        </div>
    )
}

export default App;

