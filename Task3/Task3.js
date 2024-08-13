import React from "react";
import Img1 from "./Task3/image1.jpg";
import Img2 from "./Task3/image2.jpg";

function Task3(){
    return(
        <div className="model3">
            <h1 className="h1">Super Over League</h1>
            <div className="cat">
                <img src={Img2} className="img1"/>
                <img src={Img1} className="img2"/>
            </div>
        </div>
    );
}
export default Task3;
