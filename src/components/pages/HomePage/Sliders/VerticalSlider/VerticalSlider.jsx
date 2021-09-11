import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./VerticalSlider.scss";



const VerticalSlider =(props)=>{

    const SlideSetting={
        className:"VSlider",
        autoplay:true,
        autoplaySpeed:3000,
        dots:false,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        accessibility:false,
        adaptiveHeight:true,
        vertical:true,
        arrows:false,


    };


    return(
        <Slider {...SlideSetting}>
            {
                props.Slides.map((Item)=>{
                    return(
                        <img src={Item.src} className={Item.className} id={Item.id} key={Item.id} alt={Item.alt}/>
                    );
                })
            }
        </Slider>
    );
}


export default VerticalSlider;
