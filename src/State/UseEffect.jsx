import React, { useEffect, useState } from "react";

const UseEffect = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    useEffect(() => 
    {
        alert("Hello clicked me ")
    }, [nums]
    );

    return (
        <>
            <button
                onClick={() => {
                    setNum(num + 1);
                }}>
                Click Me : {num} </button>
            <button
                onClick={() => {
                    setNums(nums + 1);
                }}>
                Click Me : {nums} </button>
        </>
    )
};

export default UseEffect;