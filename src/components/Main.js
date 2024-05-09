// // ============10===============
// // const position = "web developer";
// // const name = "uchithma"
// //
// // const myObj = {
// //     name: `${name}`,
// //     position: `${position}`,
// //     city: "Galle",
// // };
//
// import {Fragment} from "react";
//
// function Main({name, city, image}){
//     // ===========10===============
//     // const {city} = myObj
//     return <div>
//         <div>
//             {/*this is main component*/}
//             {/*<ul>*/}
//             {/*    <li>{name}</li>*/}
//             {/*    /!*<li>{position}</li>*!/*/}
//             {/*    <li>{city}</li>*/}
//             {/*</ul>*/}
//
//             {/*==========12.how toa add css==========*/}
//             <img src={image?`${image}`
//                 :`https://nationaltoday.com/wp-content/uploads/2021/10/national-teddy-bear-day.jpg`}
//                  alt="cardImage" />
//             <div className="mainBlock_details">
//                 <h3>{!name?`no-name`:`${name}`}</h3>
//                 <p><span>{city}</span></p>
//             </div>
//         </div>
//     </div>
// }
//
// export default Main;