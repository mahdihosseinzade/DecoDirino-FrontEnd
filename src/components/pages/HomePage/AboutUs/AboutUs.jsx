import React from "react";
import Strings from "../../../../assets/strings/strings";
import "./AboutUs.scss";

const AboutUs =()=>{
    return(
        <div className="boxAboutUs d-flex flex-column align-items-center">
            <text>
                درباره ما
            </text>
            <text>
                {Strings.AboutUs01}
            </text>
        </div>
    );
}

export default AboutUs;
