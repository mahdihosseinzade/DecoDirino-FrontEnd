import React, {useEffect,useState} from "react";
import './App.css';
import {StyleRoot} from 'radium';
import NavBar from "./components/globals/common/layout/Navbar/NavBar";
import HomeRoute from "./routes/HomeRoute/HomeRoute";
import Footer from "./components/globals/common/layout/Footer/Footer";
import ArticlesRoute from "./routes/ArticlesRoute/ArticlesRoute";
import AboutUsRoute from "./routes/AboutUsRoute/AboutUsRoute";
import ContactUsRoute from "./routes/ContactUsRoute/ContactUsRoute";
import LoginPageRoute from "./routes/LoginPageRoute/LoginPageRoute";
import{v4 as uuidv4} from 'uuid';
import OrderRoute from "./routes/OrderRoute/OrderRoute";
import {Route, Switch} from "react-router";
import SetInfoRoute from "./routes/SetInfoRoute/SetInfoRoute";
import ProfileRoute from "./routes/ProfileRoute/ProfileRoute";
import {useDispatch, useSelector} from "react-redux";
import {isLoginAction, profileActionAsync} from "./store/User/UserActions";

function App() {

    const dispatch = useDispatch()
    let authTokenIndex;
    useEffect(() => {
        console.log('app js')
        let cookies = document.cookie.split(" ");
        authTokenIndex = cookies.findIndex(item => item.startsWith('x-auth-token'))
        if (authTokenIndex !== -1) {
            dispatch(profileActionAsync())
        }
        dispatch(isLoginAction(authTokenIndex))

    }, [])

    const routes=[
        {
            path:"/set-info",
            component:SetInfoRoute,
            id:uuidv4(),
        },
        {
            path:"/profile",
            component:ProfileRoute,
            id:uuidv4(),
        },
        {
            path:"/login",
            component:LoginPageRoute,
            id:uuidv4(),
        },
        {
            path:"/order",
            component:OrderRoute,
            id:uuidv4(),
        },
        {
            path:"/articles",
            component:ArticlesRoute,
            id:uuidv4(),
        },
        {
            path:"/aboutus",
            component:AboutUsRoute,
            id:uuidv4(),
        },
        {
            path:"/contactus",
            component:ContactUsRoute,
            id:uuidv4(),
        }

    ];

  return (
    <div className="App">
        <StyleRoot>
            <NavBar/>
            <Switch>
                {
                    routes.map((Item)=>{
                        return(
                            <Route key={Item.id} id={Item.id} path={Item.path} component={Item.component}/>
                        );
                    })
                }
                <Route path={"/home" | "/"} component={HomeRoute}/>
            </Switch>
            <Footer/>
        </StyleRoot>
    </div>
  );

}

export default App;
