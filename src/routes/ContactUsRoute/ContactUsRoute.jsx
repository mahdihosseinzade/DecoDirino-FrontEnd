import React, {useState} from "react";
import Strings from "../../assets/strings/strings";
import "./ContactUsRoute.scss";
import {Button, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {createMessageAsync} from "../../store/Message/MessageActions";

const ContactUsRoute =()=>{

    const dispatch = useDispatch();

    const [Message,setMessage] = useState({
        name : null ,
        email : null ,
        message : null
    });

    const handelInput =(e)=>{
        const {name} = e.target;
        const {value} = e.target;
        setMessage({...Message , [name]: value})
    }

    const handelSumit =()=>{
        if(Message.message && Message.email){
            dispatch(createMessageAsync(Message));
        }else {
            console.log("Message Invalid !")
            return
        }
        window.location.reload();
    }

    return(
        <div className="ContactUsPage d-flex flex-column justify-content-around m-4" dir="rtl">

            <div className="Text">
                <text>
                    {Strings.ContactUs}
                </text>
            </div>

            <div className="d-flex flex-row justify-content-around mt-5">

                <div className="InfoBox d-flex flex-column w-50 mr-5 " dir="rtl">
                    <text className="mb-4"> جهت ارتباط با مجموعه دیرینو می توانید از راه های ارتباطی زیر استفاده کنید . </text>
                    <text className="mb-2"> آدرس : </text>
                    <text className="mb-4"> {Strings.Address}</text>
                    <text className="mb-2"> موبایل : </text>
                    <text className="mb-4"> 09199845039 </text>

                    <div>
                        <iframe
                            className="Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321.19372701150064!2d51.459468611619386!3d35.7648421516846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e046ef9b264cd%3A0x3c5ec04e97fb9a89!2sArawall%20decor!5e0!3m2!1sen!2s!4v1629487450424!5m2!1sen!2s"
                            allowFullScreen=" " loading="lazy"> </iframe>
                    </div>

                </div>

                <div className="EmailBox d-flex flex-column justify-content-around w-50 align-items-center">

                    <Form className="w-75" dir="rtl">

                        <Form.Group>
                            <Form.Control type="text" placeholder="نام کامل" className="textbox w-50" name="name" onChange={handelInput}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type="email" placeholder="ایمیل" className="textbox w-75" name="email" onChange={handelInput}/>
                        </Form.Group>

                        <Form.Group>
                            <textarea className="textMessage w-100" placeholder="پیام" name="message" onChange={handelInput}/>
                        </Form.Group>

                        <Button type="button" className="btnSend" onClick={handelSumit}>
                            ارسال
                        </Button>

                    </Form>

                </div>
            </div>

        </div>
    );
}

export default ContactUsRoute;
