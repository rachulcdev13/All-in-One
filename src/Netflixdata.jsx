import React from "react";
import Seriesdetails from "./Netflix_App/Seriesdetails";
import Card from "./Netflix_App/Card";

        const Netflixdata = () => {
            <>
            <h1 className="heading_style">List of the top Netflix series in 2022</h1>
            {Seriesdetails.map((val,index) => {
             console.log(index); 
                return (
                    <Card
                        key={val.id}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        SeriesName={val.SeriesName}
                        WebLink={val.WebLink}
                    />
                );
            })
            }
            </>
        }

        export default Netflixdata;
        