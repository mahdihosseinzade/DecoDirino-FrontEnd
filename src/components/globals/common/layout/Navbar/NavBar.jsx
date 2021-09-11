import React,{useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import './NavBar.scss';
import{v4 as uuidv4} from 'uuid';
import {Nav, Navbar,Form} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faSearch} from "@fortawesome/free-solid-svg-icons";
import Strings from "../../../../../assets/strings/strings";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../../../assets/images/Logo-site.png';
import {logoutAction} from "../../../../../store/User/UserActions";

const NavBar =()=>{

    const isLoginUser = useSelector(state => state.User.isLogin);

    const dispatch = useDispatch()

    const logoutUser = () => {
        let now = new Date().toUTCString()
        document.cookie = `x-auth-token=; expires=${now}; path=/`
        dispatch(logoutAction())
        window.location.reload()
    }


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
    ];


    return(

        <Navbar className='Navbar container-fluid' expand='lg' >

            <Navbar.Toggle aria-controls='responsive-nav'/>

            <Navbar.Collapse id='responsive-nav' >
                <Nav className='Navbar-Nav ' >
                    <Nav.Link href="/home" className=''>
                        <FontAwesomeIcon className='FontAwesome' icon={faHome} />
                    </Nav.Link>
                    {
                        links.map((Item)=>{
                            return(
                                <Nav.Link Key={Item.id} id={Item.id} className='NavLink' href={Item.path} > {Item.name} </Nav.Link>
                            )
                        })
                    }
                    {
                        isLoginUser
                            ?
                            <Nav.Link className='NavLink' href='/profile'> پروفایل </Nav.Link>
                        : <Nav.Link className='NavLink' href='/login'> ورود </Nav.Link>
                    }
                    {
                        isLoginUser
                            ?
                            <a className='NavLink' type="button" onClick={logoutUser}> خروج </a>
                            :null
                    }
                </Nav>



            </Navbar.Collapse>

            <Form inline  >
                <Form.Group className='SearchForm bg-white' >
                    <Form.Control type='text' placeholder={Strings.navSearch} size='sm'  className='InputSearch'/>
                    <FontAwesomeIcon icon={faSearch} className='AwesomeIcon'/>
                </Form.Group>
            </Form>

            <Navbar.Brand>
                <Nav.Link href='/home'>
                    <img src={Logo} className='NavLogo' alt={Strings.decodirino}/>
                </Nav.Link>
            </Navbar.Brand>

        </Navbar>
    );
}

export default NavBar;
