import React from "react";
import Slider from 'react-slick';
import './HorizontalSlider.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HorizontalSlider =(props)=>{

    const SlideSetting={
        className:"HSlider",
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        accessibility:false,
        adaptiveHeight:true,
        nextArrow:<ArrowNext/>,
        prevArrow:<ArrowPrev/>,
        fade:true
    };


    return(
        <Slider {...SlideSetting}>
            {
                props.Slides.map((Item)=>{
                    return(
                        <img src={Item.src} id={Item.id} key={Item.id} alt={Item.alt} className="Himg"/>
                    );
                })
            }
        </Slider>
    );
}

const ArrowNext=(props)=>{
    return(
        <FontAwesomeIcon icon={faChevronRight} className='NextArrowFontAwesome' onClick={props.onClick}/>
    );
}

const ArrowPrev=(props)=>{
    return(
        <FontAwesomeIcon icon={faChevronLeft} className='PrevArrowFontAwesome' onClick={props.onClick}/>
    );
}

export default HorizontalSlider;
