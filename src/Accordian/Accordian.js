import React, { useState } from "react";
import { questions } from "./AccordianAPI";
import "./Accordion.css";
import MyAccordian from "./MyAccordian";

const Accordian = () => {
    const [data] = useState(questions);
    // setdata();
    return (
        <React.Fragment>  
            <div className="accod">   
            <section className="main_div">
            <h1>React Interview Questions & Answer ?</h1> <hr style={{color:"red"}} /> 
            {data.map((currentVal, index) => {
                // return currentVal.questions;
                // const { id, questions, answer } = currentVal;
                const { id } = currentVal;
                return <MyAccordian
                    key={id}{...currentVal} />
            })}
            </section>
            </div>
            
        </React.Fragment>
    );
}
export default Accordian;