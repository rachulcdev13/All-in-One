import React from "react";
import { useParams } from "react-router-dom";

const Users = () => {
    const params = useParams();
    const { name } = params; 
    return (
        <>
            <div className="home">
                <main>
                    <h1>Hello {name}'s Page</h1>
                </main>
            </div>
        </>
    )
}
export default Users;