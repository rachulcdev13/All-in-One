import React from "react"; 

const ResultSearch = (props) => { 
    const imgsrc = `https://source.unsplash.com/600x400/?${props.name}`;

    return (
        <>
            <div className="home">
                <main> <br />
                    <img src={imgsrc} alt="Imagess" />
                </main>
            </div>
        </>
    );
}
export default ResultSearch;