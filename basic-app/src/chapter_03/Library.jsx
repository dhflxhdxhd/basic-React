import React from "react";
import Book from "./Book";

function Library(props){
    return(
        <div>
            <Book name="파이썬" numOfPage={300} />
            <Book name="AWS" numOfPage={400} />
            <Book name="Docker" numOfPage={50} />
        </div>
    );
}

export default Library;