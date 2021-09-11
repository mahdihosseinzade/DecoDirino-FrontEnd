import React, {useEffect, useState} from "react";
import {Alert, NavLink} from "react-bootstrap";
import UserFormHeader from "../LoginPage/UserFormHeader/UserFormHeader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import "./SetInfo.scss";
import {setInfoActionAsync} from "../../../store/User/UserActions";

const SetInfo =()=>{

    const dispatch = useDispatch();
    const user = useSelector(state => state.User.info)

    const [formValid,setFormValid]=useState({
        isFormValid:false,

        formFields:{

            firstName:{
                name:"firstName",
                isValid:false,
                value:"",
                rules:{
                    persian:true,
                }
            },

            lastName:{
                name:"lastName",
                value:"",
                isValid:false,
                rules:{
                    persian:true,
                }
            },

            userName:{
                name:"userName",
                value:"",
                isValid:false,
                rules:{
                    user:true
                }
            },

            email:{
                name:"email",
                value:"",
                isValid:false,
                rules:{
                    email:true,
                }
            },

            rules:{
                name:"rules",
                isValid:false,
                rules:{

                }
            },

            gender:{
                name:"gender",
                value:"-",
                isValid:true,
                rules:{
                }
            }
        }
    });

    const [show ,setShow]=useState({
        show:false,
        error:''
    });

    const checkPersian =(n)=>{
        const testP=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]/;
        return testP.test(n);
    }

    const checkEmail =(e)=>{
        const testEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return testEmail.test(e);
    }

    const checkUser =(u)=>{
        const testUser=/\W/;
        return testUser.test(u);
    }

    const Checked =()=>{
        const ff={
            ...formValid.formFields,
            rules: {
                ...formValid.formFields.rules,
                isValid: !formValid.formFields.rules.isValid
            }
        }
        let fv=true;
        for(let input in ff) {
            if(!ff[input].isValid){
                fv=false;
                break;
            }
        }
        setFormValid({formFields: ff,isFormValid: fv});
    }

    const onSelect =(e)=>{
        setFormValid({...formValid ,
            formFields: {
                ...formValid.formFields,
                gender: {
                    ...formValid.formFields.gender,
                    value:e.target.value
                }
            }});
    }

    const validate =(formElement)=>{

        formElement.isValid=true;

        for(let rule in formElement.rules){

            switch (rule){

                case "minLength" :
                    if(formElement.value.length < formElement.rules[rule]){
                        formElement.isValid=false;
                        formElement.error=`حداقل تعداد کاراکتر مجاز ${formElement.rules[rule]} می باشد `;
                    }
                    break;

                case "maxLength":
                    if(formElement.value.length > formElement.rules[rule]){
                        formElement.isValid=false;
                        formElement.error=`حداکثر تعداد کاراکتر مجاز ${formElement.rules[rule]} می باشد `;
                    }
                    break;

                case "persian" :
                    if(checkPersian(formElement.value)){
                        formElement.isValid=false;
                        formElement.error = "نام و نام خانوادگی باید فارسی باشد";
                    }
                    break;

                case "user":
                    if(checkUser(formElement.value)){
                        formElement.isValid=false;
                        formElement.error = "از کاراکتر غیر مجاز در نام کاربری استفاده شده است";
                    }
                    break;

                case "email" :
                    if(!checkEmail(formElement.value)){
                        formElement.isValid=false;
                        formElement.error = "از کاراکتر غیر مجاز در ایمیل استفاده شده است";
                    }
                    break;
            }
        }
        return formElement;
    }

    const onChange =(e)=>{
        let formFields={...formValid.formFields};
        let formElement =formFields[e.target.name];
        formElement.value=e.target.value;
        formElement = validate(formElement);
        formFields[e.target.name]=formElement;
        let isFormValid = true;
        for(let input in formFields) {
            if(!formFields[input].isValid){
                isFormValid=false;
                break;
            }
        }
        setFormValid({formFields: formFields,isFormValid: isFormValid});
    }

    console.log(formValid)

    const BSubmit =(e)=>{
        e.preventDefault();
        if(formValid.isFormValid){

            const formFinal = {
                name : formValid.formFields.firstName.value,
                lastName : formValid.formFields.lastName.value,
                userName : formValid.formFields.userName.value,
                email : formValid.formFields.email.value,
                gender : formValid.formFields.gender.value,
                acceptRules : formValid.formFields.rules.isValid
            };

            setShow({show: false,error: ''});
            dispatch(setInfoActionAsync(formFinal));
            console.log("success");
        }
        else {
            for(let item in formValid.formFields)
            {
                if(!formValid.formFields[item].isValid){
                    setShow({show: true,error: formValid.formFields[item].error});
                    break;
                }
            }
        }
    }


    return(
        <div className='SetInfo'>

            <Alert variant="danger" show={show.show} onClose={()=>setShow({show: false , error: ''})} dismissible>
                {show.error}
            </Alert>

            <UserFormHeader/>

            <form className='SetInfo_form' onSubmit={BSubmit}>
                <div className='form-inline line'>
                    <div className='form-group align-items-end formItem'>
                        <label className='bg-white'>
                            <span className='description mt-0' > (فارسی) </span>
                            نام
                        </label>
                        <input type='text' value={formValid.formFields.firstName.value} placeholder={(user && (user.user.name!==null)) ? user.user.name : null}
                               className={`form-control ${formValid.formFields.firstName.isValid ? '' : 'borderError'}`} onChange={onChange} id='FirstName' name='firstName'/>
                    </div>
                    <div className='form-group align-items-end formItem'>
                        <label>
                            <span className='description mt-0' > (فارسی) </span>
                            نام خانوادگی
                        </label>
                        <input type='text' value={formValid.formFields.lastName.value} placeholder={(user && (user?.user.lastName!==null)) ? user.user.lastName : null}
                               className={`form-control ${formValid.formFields.lastName.isValid ? '' : 'borderError'}`} onChange={onChange} id='LastName' name='lastName'/>
                    </div>
                </div>
                <div className='form-inline line'>
                    <div className='form-group align-items-end formItem'>
                        <label> نام کاربری </label>
                        <input type='text' value={formValid.formFields.userName.value} placeholder={(user && (user.user.userName!==null)) ? user.user.userName : null}
                               className={`form-control leftInput ${formValid.formFields.userName.isValid ? '' : 'borderError'}`} onChange={onChange} id='UserName' name='userName'/>
                        <span className='description' > (کاراکترهای مجاز : A-Z و a-z و 0-9 و _ و . ) </span>
                    </div>
                    <div className='form-group align-items-end formItem'>
                        <label> ایمیل </label>
                        <input type='email' value={formValid.formFields.email.value} placeholder={(user && (user.user.email!==null)) ? user.user.email : null}
                               className={`form-control leftInput ${formValid.formFields.email.isValid ? '' : 'borderError'}`} onChange={onChange} id='Email' name='email'/>
                        <span className='description invisible' >1 </span>
                    </div>
                </div>
                <div className='form-inline line mb-2'>
                    <div className='form-check formItem ml-4'>
                        <label className='form-check-label d-flex flex-row-reverse align-self-center'>
                            <input type='checkbox'
                                   className={`form-check-input ${formValid.formFields.gender.isValid ? '' : 'borderError'}`}
                                   onChange={Checked} id='Rules' name='rules' checked={(user) ? user.user.acceptRule : null}/>
                            <span className='rulesMedia'> با مقررات دیرینو موافقم </span>
                        </label>
                        <NavLink to='#' className=''>
                            (مشاهده مقررات دیرینو)
                        </NavLink>
                    </div>
                    <div className='form-group align-items-end formItem'>
                        <label> جنسیت </label>
                        <select className='form-control SelectGender' onChange={onSelect} id='Gender' name='gender' value={user ? user.user.gender : null}>
                            <option> - </option>
                            <option> مرد </option>
                            <option> زن </option>
                            {/*<option> موسسه </option>*/}
                        </select>
                    </div>
                </div>
                <button type="submit" className='btnSubmitS'>
                    ثبت
                </button>

            </form>
        </div>
    );
}

export default SetInfo;
