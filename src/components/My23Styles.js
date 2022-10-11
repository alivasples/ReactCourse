import React from "react";
import "./My23Styles.css"

export default function My23Styles(){
    
    let myStyle = {
        borderRadius: "2rem"
        , margin: "1rem"
        , maxWidth: "50%"
    }
    
    return(
        <div className="container">
            <h2> Styles in React </h2>
            <h3 className="bg-react"> Style from external page </h3>
            <h3 className="bg-react" style={{borderRadius:"1rem", margin:"1rem"}}> Style inline </h3>
            <h3 className="bg-react" style={myStyle}> Style inline variable </h3>
        </div>
    )
}