import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import styled from "styled-components";

const ContactRouter = () => {
    const [mainData, setMainData] = useState([])
    const [themeChange, setThemeChange] = useState(false)

    useEffect(() => {
        const dataFetching = async ()=>{
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
            const data = await res.json()

            if(data){
                console.log(data)
                setMainData(data)
            }
        };

        dataFetching();
    }, []);

   return (
       // styled components
       <ContactContainer>
           Contact page
           <button onClick={()=> setThemeChange(pre=>pre?false:true)}>
               Change Theme</button>
           <ContactBlock>
               {mainData?.map(({id, title})=>(
                   <Link to={`/ContactRouter/${id}`} key={id}>
                       <ContactBlockUnit changeTheme={themeChange}>
                           <img src='https://nationaltoday.com/wp-content/uploads/2021/10/national-teddy-bear-day.jpg'
                           alt="contact block unit"/>
                           <h3>{title}</h3>
                       </ContactBlockUnit>
                   </Link>
               ))}
           </ContactBlock>
       </ContactContainer>
   );
};

export default ContactRouter;

// styled components

const ContactContainer = styled.main`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContactBlock = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 25px;
`;

const ContactBlockUnit = styled.div`
    padding: 20px;
    border-radius: 7px;
    border: 2px solid ${({changeTheme})=>{
        if(changeTheme){
            return 'black';
        }else {
            return 'pink';
        }
    }};
    background-color: ${(props)=>(props.changeTheme ? 'black' : 'pink')};
    transition: all 400ms ease-in;
    
    &:hover{
        background-color: inherit;
    }
    
    h3{
        font-size: 14px;
    }
    
    img{
        width: 100%;
        object-fit: contain;
    }
`;