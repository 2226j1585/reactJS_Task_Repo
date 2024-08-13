import React from "react";
import Img2 from "./Task1/image2.png";
import Img3 from "./Task1/image3.png";


function Task1(){
    return(
        <div className="model">
            <h2 className="h2">Congratulations</h2>
            <div className="hello">
                <img src={Img2} className="bye"/>
                <h1 className="text1">Kiran V</h1>
                <p className="text2">Vishnu Institute of Computer Education and Technology</p>
                <p className="text2">Bhimavaram</p>
                <img src={Img3} className="bye"/>
            </div>
        </div>
    );
}

export default Task1;
