import React, { useState } from "react";

const MyAccordian =({questions,answer})=>{
    const [show,setShow]=useState(false);

    return(
        <>
        <div className="main_heading">
            <p className="ques" onClick={()=>setShow(!show)}><span className="add"> {show? "➖":"➕"} </span></p>
            <h3 className="ques">{questions}</h3>
        </div>
        <div>
        {show && <p className="answers">{answer} </p>}
        </div> <br />
        </>
    )
}

export default MyAccordian;