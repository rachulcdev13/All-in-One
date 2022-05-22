import React from "react";
import Matchslot from "./Matchslot";
import Notmatchslot from "./Notmatchslot";

const SlotM = (props) => {
    // let x = props.x;
    // let y = props.y;
    // let z = props.z;
    let{x,y,z} =props;

    if (x === y && y === z) {
        return <Matchslot />
    } else {
        return <Notmatchslot />
    }
    // {(x === y && y === z)?<Matchslot />:<Notmatchslot />}
}
export default SlotM;