import React, {useEffect} from "react";
import "./ProfilePage.scss";
import ProfilePageImg from "../../../assets/images/01.jpg";
import {NavLink} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {isLoginAction, profileActionAsync} from "../../../store/User/UserActions";


const ProfilePage =()=>{

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(profileActionAsync())
    }, [])

    const user = useSelector(state => state.User.info)

    return(
        <div className="ProfilePage d-flex flex-column justify-content-around ">
            <img src={ProfilePageImg} alt="profilePage" className="ImgProf"/>
            <div className="Box2 d-flex flex-row " dir="rtl">

                <div className="BoxInfo d-flex flex-column align-items-center justify-content-between">
                    <div className="d-flex flex-column align-items-center">
                        <img src={ProfilePageImg} alt="UserImg" className="UserImg"/>
                        <text className="mb-4"> {(user) ? `${user.user.name} ${user.user.lastName}` : ' '} </text>
                        <text> دانشجوی کارشناسی مهندسی کامپیوتر و مشاور دکوراسیون داخلی </text>
                    </div>

                    <div>
                        <text> سطح دسترسی : {user ? user.user.access : ''}</text>
                        <NavLink href="/set-info">
                            تنظیمات پروفایل
                        </NavLink>
                    </div>
                </div>

                <div className="ProjectList w-50">

                    <text className="TitleP"> پروژه های دکوراسیون دیرینو </text>

                    {
                        (user && user.Projects !== null) ?
                        user.Projects.map((Item)=>{
                            return(
                                <div className="ProjectBox">
                                    <text className="mb-2"> {Item.subject} </text>
                                    <div>
                                        <text> کارفرما : {Item.employer.name} </text>
                                        <text> موبایل : {Item.employer.phoneNumber} </text>
                                        <text> تلفن ثابت : {Item.employer.telephone} </text>
                                    </div>
                                    <div>
                                        <text> محیط : {Item.environment} </text>
                                        <text> سبک طراحی : {Item.style} </text>
                                        <text> مساحت : {Item.area} </text>
                                        <text> هزینه تقریبی : {Item.cost} میلیون ریال </text>
                                    </div>
                                    <div>
                                        <text> آدرس : {Item.address} </text>
                                        <text> توضیحات : {Item.description} </text>
                                    </div>

                                </div>
                            );
                        }):null
                    }

                </div>


            </div>

        </div>
    );
}

export default ProfilePage;


