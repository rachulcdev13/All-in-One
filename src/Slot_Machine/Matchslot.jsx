import React from "react"; 

const Matchslot = (props) => {
    let{x,y,z} =props;
    return (
        <>
            <div className="matchigslot">
                <h1>
                    {x} {y} {z}
                </h1>
                <h1>This is Matching...😄</h1>
                <br />
                {/* <hr /> */}
            </div>
        </>
    )

}
export default Matchslot;