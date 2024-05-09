import {useState} from "react";

// =========nav bar==================
const Header = () => {

    const [menuClick, setMenuClick] = useState(false)

    return (
        <header className="header_container">
            <h1>UCHI <span>DEV</span></h1>
            <nav>
                <ol>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Project</li>
                </ol>
                <button className="header_menuClick" style={{
                    cursor:'pointer',
                }} onClick={()=>{
                    setMenuClick((pre)=>(!pre ? true : pre));
                }}>Menu</button>
                <ul style={{
                    right: `${menuClick?'-20px':'-250px'}`,
                    display:`${menuClick?'flex' : 'none'}`,
                }}>
                    <div className="header_menuClose">
                        <button onClick={()=>{
                            setMenuClick((pre)=>(pre ? false : pre) );
                        }}>close</button>
                    </div>
                    <div className="header_menu">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Project</li>
                    </div>
                </ul>
            </nav>
        </header>
    )
};

export default Header