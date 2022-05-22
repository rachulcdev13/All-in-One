import React from "react"; 


const Notmatchslot = (props) => {
    let{x,y,z} =props;
    return (
        <>
            <div className="matchigslot">
                <h1>
                    {x} {y} {z}
                </h1>
                <h1>This is Not Matching...😥 </h1>
                <br />
                {/* <hr /> */}
            </div>
        </>
    )

}
export default Notmatchslot;