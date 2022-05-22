
import React, { useState } from "react"; 
import ResultSearch from "./ResultSearch";

const Search = () => { 
    const [searchName,setsearchName] = useState('');

    const inoutEvent = (event) => {
        const data = event.target.value;
        // console.log(data);
        setsearchName(data);
    }
    return (
        <>
            <div className="home">
                <main>
                    <h1>Live Search Filter using Hooks </h1><br /> 
                    <input type="text" 
                    style={{width:"30%",borderRadius:"12px",padding:"10px" }} 
                    placeholder="Enter your Fev picture...!"
                    onChange={inoutEvent}
                    value={searchName}
                    />
                    {searchName ==="" ? null:<ResultSearch name={searchName} />} 
                    {/* <ResultSearch name={searchName} /> */}
                </main>
            </div>
        </>
    );
}
export default Search;