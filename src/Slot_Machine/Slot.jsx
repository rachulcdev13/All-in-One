import React from "react"; 
import SlotM from "./SlotM";
import Slotheading from "./Slotheading";

const Slot =()=>{
    return( 
        <>
            <Slotheading />
            <div><br/>
            <SlotM x='😄' y='😄' z='😄' />
            <SlotM  x='😎' y='😎' z='😎' />
            <SlotM  x='😄' y='🍟' z='🍔' />
            <SlotM x='😄' y='🤣' z='🤣' /> 
            </div>
        </>
    );
}
export default Slot;