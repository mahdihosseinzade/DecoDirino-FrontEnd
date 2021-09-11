import React from "react";
import {Card, NavLink} from "react-bootstrap";
import Strings from "../../../../../assets/strings/strings";
import Logo from '../../../../../assets/images/Logo-site.png';
import './Footer.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWhatsapp,faTelegram,faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faMobileAlt, faMapMarked} from "@fortawesome/free-solid-svg-icons";
import {v4 as uuidv4} from "uuid";


const Footer =()=>{

    const links=[

        {
            name:'صفحه اصلی',
            path:'/home',
            id:uuidv4()
        },
        {
            name:'خدمات',
            path:'/order',
            id:uuidv4()
        },
        {
            name:'مقالات',
            path:'/articles',
            id:uuidv4()
        },
        {
            name:'درباره ما',
            path:'/aboutus',
            id:uuidv4()
        },
        {
            name:'تماس با ما',
            path:'/contactus',
            id:uuidv4()
        },
        {
            name:'ورود',
            path:'/login',
            id:uuidv4()
        },
    ];

    return(
        <div className='Footer d-flex flex-row-reverse  justify-content-between'>

            <div className='FooterMenu'>
                <menu>
                    <ul>
                        {
                            links.map((Item)=>{
                                return(
                                    <NavLink className='NavLink' href={Item.path} key={Item.id} id={Item.id} >{Item.name}</NavLink>
                                );
                            })
                        }
                    </ul>
                </menu>
            </div>

            <div className='About'>
                <p>تماس با ما :</p>

                <div className='d-flex flex-row-reverse align-items-center'>
                    <FontAwesomeIcon
                        className="Footer_icon"
                        icon={faMobileAlt}
                    />
                    09199845039
                </div>

                <div className='d-flex flex-row-reverse'>
                    <a href="https://instagram.com/decodirino">
                        <FontAwesomeIcon
                            className="Footer_icon"
                            icon={faInstagram}
                        />
                    </a>
                    <a href="https://t.me/decodirino">
                        <FontAwesomeIcon
                            className="Footer_icon"
                            icon={faTelegram}
                        />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=989335078306&text= سلام. وقت بخیر! من از طریق سایت دکودیرینو با شما ارتباط میگیرم!">
                        <FontAwesomeIcon
                            className="Footer_icon"
                            icon={faWhatsapp}
                        />
                    </a>
                </div>

                <div className='d-flex flex-column align-items-center mt-3'>
                    <div className="d-flex flex-row justify-content-between w-100 mb-2" >
                        آدرس :
                        <FontAwesomeIcon
                            className="Footer_icon"
                            icon={faMapMarked}
                        />
                    </div>
                    {Strings.Address}
                </div>

            </div>


            <div className='FooterLogo'>
                <Card className='CardLogo'>
                    <Card.Header>
                        <img src={Logo} alt="/" className=""/>
                    </Card.Header>
                    <Card.Body>
                        <text>{Strings.AboutUs01}</text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Footer;
