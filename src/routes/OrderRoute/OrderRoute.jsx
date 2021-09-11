import React, {useEffect, useState} from "react";
import "./OrderRoute.scss";
import {Button, Form} from "react-bootstrap";
import OrderPageImg from "../../assets/images/ProjeectImg.jpg";
import{v4 as uuidv4} from 'uuid';
import {useDispatch, useSelector} from "react-redux";
import {createProjectAsync} from "../../store/Project/ProjectActions";

const OrderRoute =()=>{

    const dispatch = useDispatch();
    const isLoginUser = useSelector(state => state.User.isLogin);
    const UserInfo = useSelector(state => state.User.info);

    const [Project,setProject] =useState({
        _id : uuidv4(),
        subject :null ,
        employer:{
            name:null,
            phoneNumber:null,
            telephone:null,
        },
        environment: 'منزل مسکونی' ,
        style: 'کلاسیک' ,
        area:null,
        cost:null,
        address:null,
        description:null,
        user:{
            _id:null,
            phoneNumber: null
        }
    });

    const handelFormControl =(e)=>{
        const {name} = e.target;
        const {value} = e.target;
        if(name==="name"){
            setProject({...Project, employer: {...Project.employer, name: value}});
        }else if (name==="phoneNumber") {
            setProject({...Project, employer: {...Project.employer, phoneNumber: value}});
        }else if (name==="telephone")
        {
            setProject({...Project, employer: {...Project.employer, telephone: value}});
        }else {
            setProject({...Project, [name]: value});
        }
    }

    const validationProject = (project)=>{
        if(project.employer.telephone && project.employer.telephone){
            console.log(Project._id)
            return true;
        }
    }

    const handelSubmit =()=>{
        if(isLoginUser){
            setProject({
                ...Project,
                user: {
                    _id: UserInfo._id,
                    phoneNumber: UserInfo.phoneNumber
                }
            })
        }

        if (validationProject(Project)){
            dispatch(createProjectAsync(Project));
            window.location.reload();
        }else {
            console.log("Project Error")
        }
    }


    return(
        <div className="OrderPage d-flex flex-column  ">

            <img src={OrderPageImg} alt="OrderPage" className="imgOr"/>

            <Form className="form d-flex flex-column justify-content-around align-content-center" dir="rtl" onSubmit={handelSubmit} >

                <Form.Row className="justify-content-between ">

                    <Form.Group className="formG">
                        <Form.Label className="formLabel">
                            عنوان
                        </Form.Label>
                        <Form.Control type="text" placeholder="عنوان" className="formControl" name="subject" value={Project.subject} onChange={handelFormControl}/>
                    </Form.Group>

                    <Form.Group className="formG">
                        <Form.Label className="formLabel">
                            نام و نام خانوادگی کارفرما
                        </Form.Label>
                        <Form.Control type="text" placeholder="نام و نام خانوادگی" className="formControl" name="name" value={Project.employer.name} onChange={handelFormControl}/>
                    </Form.Group>

                    <Form.Group className="formG">
                        <Form.Label className="formLabel">
                            موبایل
                        </Form.Label>
                        <Form.Control type="phone" placeholder="موبایل" className="formControl" name="phoneNumber" value={Project.employer.phoneNumber} onChange={handelFormControl}/>
                    </Form.Group>

                    <Form.Group className="formG">
                        <Form.Label className="formLabel">
                            تلفن ثابت
                        </Form.Label>
                        <Form.Control type="phone" placeholder="تلفن ثابت" className="formControl" name="telephone" value={Project.employer.telephone} onChange={handelFormControl}/>
                    </Form.Group>

                </Form.Row>

                <Form.Row className="justify-content-between">

                    <Form.Group className="formG">
                        <Form.Label className="formLabel">
                            کارایی محیط
                        </Form.Label>
                        <select className="formControl" name="environment" value={Project.environment} onChange={handelFormControl}>
                            <option> منزل مسکونی </option>
                            <option> مغازه/ فروشگاه </option>
                            <option> دفتر کار </option>
                        </select>
                    </Form.Group>

                    <Form.Group className="formG">
                        <Form.Label className="formLabel" >
                            سبک طراحی
                        </Form.Label>
                        <select className="formControl" name="style" value={Project.style} onChange={handelFormControl}>
                            <option> کلاسیک </option>
                            <option> مدرن </option>
                            <option> نئو کلاسیک </option>
                        </select>
                    </Form.Group>

                    <Form.Group className="formG">
                        <Form.Label className="formLabel">
                            مساحت محیط
                        </Form.Label>
                        <Form.Control type="number" placeholder="مساحت محیط" className="formControl" name="area" value={Project.area} onChange={handelFormControl} />
                    </Form.Group>

                    <Form.Group className="formG">
                        <Form.Label className="formLabel">
                            هزینه تقریبی (میلیون ریال)
                        </Form.Label>
                        <Form.Control type="number" placeholder="هزینه" className="formControl" name="cost" value={Project.cost} onChange={handelFormControl} />
                    </Form.Group>

                </Form.Row>

                <Form.Row className="w-100">

                    <Form.Group className="formG w-50">
                        <Form.Label className="formLabel">
                            آدرس پروژه
                        </Form.Label>
                        <Form.Control type="text" placeholder="آدرس" className="formControl w-75" name="address" value={Project.address} onChange={handelFormControl} />
                    </Form.Group>

                    <Form.Group className="formG w-50">
                        <Form.Label className="formLabel">
                            توضیحات
                        </Form.Label>
                        <Form.Control type="text" placeholder="توضیحات" className="formControl w-75" name="description" value={Project.description} onChange={handelFormControl} />
                    </Form.Group>

                </Form.Row>

                <Button className="btnSabt mr-5" type="button" onClick={handelSubmit}>
                    ثبت
                </Button>

            </Form>

        </div>
    );
}

export default OrderRoute;
