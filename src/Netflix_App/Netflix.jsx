import React from "react";
import Seriesdetails from "./Seriesdetails";
import Card from "./Card";
import "./Netflix.css"

const Netflix = ()=>{
        return (
            <>
        <Card
            key={Seriesdetails[1].id}
            imgsrc={Seriesdetails[1].imgsrc}
            title={Seriesdetails[1].title}
            SeriesName={Seriesdetails[1].SeriesName}
            WebLink={Seriesdetails[1].WebLink}
        />
        <Card
            imgsrc={Seriesdetails[2].imgsrc}
            title={Seriesdetails[2].title}
            SeriesName={Seriesdetails[2].SeriesName}
            WebLink={Seriesdetails[2].WebLink}
        />
        <Card
            key={Seriesdetails[3].id}
            imgsrc={Seriesdetails[3].imgsrc}
            title={Seriesdetails[3].title}
            SeriesName={Seriesdetails[3].SeriesName}
            WebLink={Seriesdetails[3].WebLink}
        />
        <Card
            key={Seriesdetails[4].id}
            imgsrc={Seriesdetails[4].imgsrc}
            title={Seriesdetails[4].title}
            SeriesName={Seriesdetails[4].SeriesName}
            WebLink={Seriesdetails[4].WebLink}
        />

<Card
            key={Seriesdetails[1].id}
            imgsrc={Seriesdetails[1].imgsrc}
            title={Seriesdetails[1].title}
            SeriesName={Seriesdetails[1].SeriesName}
            WebLink={Seriesdetails[1].WebLink}
        />
        <Card
            imgsrc={Seriesdetails[2].imgsrc}
            title={Seriesdetails[2].title}
            SeriesName={Seriesdetails[2].SeriesName}
            WebLink={Seriesdetails[2].WebLink}
        />
        <Card
            key={Seriesdetails[3].id}
            imgsrc={Seriesdetails[3].imgsrc}
            title={Seriesdetails[3].title}
            SeriesName={Seriesdetails[3].SeriesName}
            WebLink={Seriesdetails[3].WebLink}
        />
        <Card
            key={Seriesdetails[4].id}
            imgsrc={Seriesdetails[4].imgsrc}
            title={Seriesdetails[4].title}
            SeriesName={Seriesdetails[4].SeriesName}
            WebLink={Seriesdetails[4].WebLink}
        />
        </>
        );
}
export default Netflix;