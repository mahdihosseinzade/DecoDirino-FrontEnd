import React from "react";
import HorizontalSlider from "./HorizontalSLider/HorizontalSlider";
import HorizontalSlide01 from "../../../../assets/images/01.jpg";
import HorizontalSlide02 from "../../../../assets/images/02.jpg";
import HorizontalSlide03 from "../../../../assets/images/03.jpg";
import HorizontalSlide04 from "../../../../assets/images/04.jpg";
import {v4 as uuidv4} from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap-grid.min.css"
import "./Sliders.scss";

const Sliders =()=>{

    const HorizontalSlides=[
        {
            src:HorizontalSlide01,
            alt:'SlideShow01',
            id:uuidv4()
        },
        {
            src:HorizontalSlide02,
            alt:'SlideShow02',
            id:uuidv4()
        },
        {
            src:HorizontalSlide03,
            alt:'SlideShow03',
            id:uuidv4()
        },
        {
            src:HorizontalSlide04,
            alt:'SlideShow04',
            id:uuidv4()
        }
    ];


    return(

        <div className="Sliders d-flex flex-row  justify-content-around">
            <HorizontalSlider Slides={HorizontalSlides}/>
        </div>
    );
}

export default Sliders;
