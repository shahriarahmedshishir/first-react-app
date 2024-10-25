import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Item = ({item}) => {
    const li={
        display: "flex",
        flexDirection: "column",
        background: "#fba1df",
        padding: "1.2rem",
        
    }
    const h={
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        whiteSpace:  "nowrap"
    }
    const p={
        marginLeft: "2.3rem",
        marginTop: "10px"
    }
    const clickColor={
        background: "transparent",
        border: "2px solid #fba1df",
        padding: "1.2rem",
    }
    const {question,description} = item;

    const [open,setOpen] = useState(false);

    const cheakOpen = () => {
        setOpen(!open);
    }
    return (
        <>
        <li onClick={cheakOpen} style={open ? clickColor : li}>
        <div style={h}>
            {open && <span><FaMinus /></span>}
            {!open && <span><FaPlus /></span>}
            <h3>{question}</h3>
        </div>
        {open && <p style={p}>{description}</p>}
        </li>
        </>
    );
};

export default Item;