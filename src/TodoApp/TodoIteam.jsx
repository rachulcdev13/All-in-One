import React from "react"; 

const TodoIteam =(props)=> {

    return(
          <>
          <div className="todo_style">
            <li className="fa fa-remove"  
            aria-hidden="true"
            onClick={()=>{
                props.onSelect(props.id)
            }}> </li>
            <li>{props.text}</li>
          </div>
              
          </>
    );
}
export default TodoIteam;