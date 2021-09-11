import React from "react";
import "./ProjectLine.scss";
import BuildingPlan from "../../../../assets/icons/BuildingPlan.png";
import Design from "../../../../assets/icons/Design.png";
import Ejra from "../../../../assets/icons/Ejra.png";

const ProjectLine =()=>{
    return(
        <div className="ProjectLine d-flex flex-row justify-content-center" dir="rtl">
            <div className="d-flex flex-column">
                <div className="Border d-flex flex-column align-items-center justify-content-center">
                    <img src={BuildingPlan} alt="BuildingPlan" className="Icons mr-4"/>
                </div>
                <h2 className="Hs mt-4 ml-3">
                    برداشت
                </h2>
            </div>

            <div className="d-flex flex-column">
                <div className="Border d-flex flex-column align-items-center justify-content-center">
                    <img src={Design} alt="Design" className="Icons"/>
                </div>
                <h2 className="Hs mt-4 ">
                    طراحی
                </h2>
            </div>

            <div className="d-flex flex-column">
                <div className="Border d-flex flex-column align-items-center justify-content-center">
                    <img src={Ejra} alt="Ejra" className="Icons "/>
                </div>
                <h2 className="Hs mt-4">
                    اجرا
                </h2>
            </div>

        </div>
    );
}

export default ProjectLine;
