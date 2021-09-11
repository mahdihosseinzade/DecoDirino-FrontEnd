import React from "react";
import "./AboutUsRoute.scss";
import ImgAbout from "../../assets/images/AboutUs.jpg";
import Logo from "../../assets/images/Logo.png";
import Strings from "../../assets/strings/strings";
import {Button} from "react-bootstrap";

const AboutUsRoute =()=>{

    return(

        <div className=" AboutUsPage d-flex flex-column justify-content-around">

            <img src={ImgAbout} alt=" " className="ImgAbouta"/>

            <div className=" d-flex flex-column justify-content-around m-4" dir="rtl">
                <div className="d-flex flex-row justify-content-around align-items-center">
                    <img className="Logo" src={Logo} alt="Logo"/>
                    <text>
                        {Strings.AboutUs01}
                    </text>
                </div>

                <div className="d-flex flex-column justify-content-around">
                    <p className="mr-5 mt-3"> {Strings.AboutUs02} </p>
                    <p className="mr-5"> {Strings.AboutUs03} </p>

                </div>

                <Button className="AbtnOrder" href="/order">
                    مشاوره / ثبت سفارش طراحی
                </Button>
            </div>

        </div>
    );
}

export default AboutUsRoute;
