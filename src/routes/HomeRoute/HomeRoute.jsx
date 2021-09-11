import React, {useEffect} from "react";
import Sliders from "../../components/pages/HomePage/Sliders/Sliders";
import DesignOrder from "../../components/pages/HomePage/DesignOrder/DesignOrder";
import Articles from "../../components/pages/HomePage/Articles/Articles";
import "./HomeRoute.scss";
import ProjectLine from "../../components/pages/HomePage/ProjectLine/ProjectLine";

const HomeRoute =()=>{

    return(
        <div className="HomePage" >
            <Sliders/>
            <ProjectLine/>
            <DesignOrder/>
            <Articles />
        </div>
    );
}

export default HomeRoute;
