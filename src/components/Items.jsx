import { useEffect, useState } from "react";
import Item from "./item";


const Items = () => {
    const itemcolor={
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
    }
    const[items,setitems] = useState([]);

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setitems(data));
    },[])
    return (
        <>
        <div style={itemcolor}> 
             {
                    items.map(item => <Item key={item.id} item={item}></Item> )
             }
        </div>
        </>
    );
};

export default Items;