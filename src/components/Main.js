// ============10===============
// const position = "web developer";
// const name = "uchithma"
//
// const myObj = {
//     name: `${name}`,
//     position: `${position}`,
//     city: "Galle",
// };

function Main({name, city}){
    // ===========10===============
    // const {city} = myObj
    return <div>
        this is main component
        <ul>
            <li>{name}</li>
            {/*<li>{position}</li>*/}
            <li>{city}</li>
        </ul>
    </div>
}

export default Main;