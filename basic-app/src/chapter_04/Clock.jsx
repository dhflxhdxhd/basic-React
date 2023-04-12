import React from "react";

function Clock(props){
    return(
        <div>
            <h1>붐 치키 붐 치키 치키치키 붐 붐</h1>
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;