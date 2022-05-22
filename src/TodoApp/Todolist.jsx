import React, { useState } from "react";
import TodoIteam from "./TodoIteam";
import "./Todo.css";

const Todolist = () => {

    const[todoName,setTodoName]=useState("");
    const[todoItem,settodoItem]=useState([]);

    const inputEvent=(event)=>{
        console.log(event.target.value);
        setTodoName(event.target.value);
        // const names = event.target;
    }
    const addTodoList = () => {
        // event.preventDefault();
        settodoItem((olddotoItem)=>{
            return  [...olddotoItem,todoName]
        });
        setTodoName("");
    } 
    const deletetodoItem =(id)=>{
        // alert('Deleted');
        settodoItem((oldItems)=>{
            return oldItems.filter((arrElemet,index) => {
                return index !== id;
            })
        })   
    }

    return (
        <>
            <div className="dolistapp"><br /><br />
                <div className="center_div"><br />
                    <h1 style={{
                        backgroundColor:'#9b59b6',
                        color:'#fff',
                        textAlign:'center',
                        padding:'5px',
                        borderRadius:'5px',
                        letterSpacing:'2px' 
                        }}>ToDo List App</h1><br />
                    <input type="text" 
                    className="input" 
                    onChange={inputEvent} 
                    placeholder="Add Your ToDo..."
                    value={todoName} />
                    <button className="addbtn" onClick={addTodoList}>Add</button><br /> 
                    <ol>
                        {/* <li>{todoName}</li> */}
                         {todoItem.map((dotoItemVal,index)=>{
                             return <TodoIteam 
                                key={index}
                                id={index}
                                text={dotoItemVal}
                                onSelect={deletetodoItem}
                             />
                         })}
                    </ol>
                </div>
            </div>
        </>
    )
}
export default Todolist;