import React, { useState }  from "react";   
import "./Incremnet.css"
const Count = () => { 
    

    // const count = 0;
    const[currCount,setcurrCount] = useState(0);
    
    const incrementCount = () => {
        setcurrCount(currCount+1);  
    } 
    const decrementCount = () => {
        
        if (currCount>0) {
            setcurrCount(currCount-1);
        }else{
            setcurrCount(0);
            alert("Sorry, Zero Limit Reached..😎");
        }
        
    } 
    
    return (
        <>
            <div className="Increment"><br /><br />
                <div className="center_count"><br />
                <h2 style={{
                        backgroundColor:'white',
                        color:'black',
                        marginTop: '10px',
                        textAlign:'center',
                        padding:'5px'
                        }}>🤞 Count Increment Decrement 🤞</h2><br />
                    <h1 style={{
                        backgroundColor:'#fff', 
                        fontSize:'100px',
                        marginTop: '20px',
                        textAlign:'center',
                        padding:'5px',
                        borderRadius:'5px',
                        letterSpacing:'2px' 
                        }}>{currCount}</h1><br /> 
                        
                    <button className="addbtns" onClick={incrementCount}>Increment</button>
                    <button className="addbtns" onClick={decrementCount}>Decrement </button><br />  
                </div> 
            </div>
            
        </>
    )
}
export default Count;