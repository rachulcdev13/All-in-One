import React from "react"; 

// import Seriesdetails from "./Netflix_App/Seriesdetails";
// import Card from "./Netflix_App/Card";
// import Netflixheading from "./Netflix_App/Netflixheading";
 
import Routers from "./React-Router/Routers";
import { BrowserRouter } from "react-router-dom"; 
// const Fevs = "Amazone"; 

const App = () => (
    <>
        <BrowserRouter>
            <Routers />
        </BrowserRouter> 
         
        {/* <Netflixheading />
        {Seriesdetails.map((val, index) => {
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
        } */}

        {/* ternory if condition */}
        {/* {(Fevs==="Amazone") ? <Amazone />:<Netflix /> } */}
        
    </>
);
export default App;
