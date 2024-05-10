import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const ContactRouter = () => {
    const [mainData, setMainData] = useState([])

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

   return <div>Contact page
       <div>
           {mainData?.map(({id, title})=>(
               <Link to={`/ContactRouter/${id}`} key={id}>
                   <div>
                       <h3>{title}</h3>
                   </div>
               </Link>
           ))}
       </div>
   </div>;
};

export default ContactRouter;