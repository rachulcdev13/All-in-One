import React from "react";
import Seriesdetails from "./Seriesdetails";
import Card from "./Card";
 
const Amazone = () => { 
        return (
            <Card
                key={Seriesdetails[3].id}
                imgsrc={Seriesdetails[3].imgsrc}
                title={Seriesdetails[3].title}
                SeriesName={Seriesdetails[3].SeriesName}
                WebLink={Seriesdetails[3].WebLink}
            />
        ); 
}

export default Amazone;