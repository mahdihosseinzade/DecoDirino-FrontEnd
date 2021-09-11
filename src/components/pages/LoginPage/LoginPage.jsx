import React, {useEffect, useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import "./LoginPage.scss";
import UserFormHeader from "./UserFormHeader/UserFormHeader";
import {Alert} from "react-bootstrap";
import {loginActionAsync, verifyActionAsync} from "../../../store/User/UserActions";
import {useHistory} from "react-router";

const LoginPage =()=> {

    const history = useHistory();
    const dispatch = useDispatch();

    const [showSuccess,setShowSuccess]=useState(false);
    const [showError,setShowError]=useState(false);
    const [invalidInputs, setInvalidInputs] = useState(false);
    const [verifySMS, setVerifySMS] = useState('');
    const [resendCode, setResendCode] = useState(false);
    const [inputsVal, setInputsVal] = useState({phoneNumber: ''});
    const [timeLeft, setTimeLeft] = useState(180);
    const [editNumVal, setEditNumVal] = useState(null);
    const [df, setDf] = useState("");
    const [dc, setDc] = useState("d-none");

    const user = useSelector((state)=> state.User);
    const alerts = useSelector((state) => state.Alert);


    const phone_validation = (phoneNumber) => {
        if (phoneNumber.length === 11) {
            const testPhone = /(09)\d{9}/;
            return (testPhone.test(phoneNumber));
        }
        return false;
    };

    const submitLogin  =(e)=> {
        e.preventDefault();
        setShowError(false);
        setInvalidInputs(false);
        const phoneValidation = phone_validation(inputsVal.phoneNumber);
        if (phoneValidation) {
            setEditNumVal(inputsVal.phoneNumber);
            setDf("d-none");
            setDc("");
            try {
                dispatch(loginActionAsync(inputsVal));
            }
            catch (error)
            {
                console.log(error.message)
            }

        } else {
            setInvalidInputs(true);

        }
    };

    const handleInputChange = (e) => {
        const {name} = e.target;
        const {value} = e.target;
        setInputsVal({...inputsVal, [name]: value});
    };

    const setTimeClocK = (time) => {
        let tl = {};
        if (time > 0) {
            if ((time % 60 < 10)) {
                tl = {
                    minutes: `0${Math.floor(time / 60)}`,
                    seconds: `0${Math.floor(time % 60)}`,
                };
            } else {
                tl = {
                    minutes: `0${Math.floor(time / 60)}`,
                    seconds: Math.floor(time % 60),
                };
            }
        } else {
            tl = {
                minutes: `0${Math.floor(0)}`,
                seconds: `0${Math.floor(0)}`,
            };
        }
        return tl;
    };

    const [ReverseTimer, setReverseTimer] = useState(setTimeClocK(timeLeft));

    const returnTimeLeft = () => {
        if (timeLeft > 0) {
            setTimeLeft(timeLeft - 1);
            return timeLeft;
        }
        if (timeLeft === 0) {
            setResendCode(true);
        }
    };

    useEffect(() => {
        const timerDown = setTimeout(() => {
            setReverseTimer(setTimeClocK(returnTimeLeft()));
        }, 1000);
        return () => clearTimeout(timerDown);
    }, [timeLeft]);

    const handleVerifyInputChange = (e) => {
        e.preventDefault();
        const val = e.target.value;
        if (val.length < 7) {
            setVerifySMS(e.target.value);
        }
    };

    const handleEditNumBtn = () => {
        setDc("d-none");
        setDf("");
    };

    const handleConfirmSubmit = (e) => {
        e.preventDefault();
        const verifySMSNum = parseInt(verifySMS);
        try {
            dispatch(
                verifyActionAsync({
                    phoneNumber: editNumVal,
                    verifyCode: verifySMSNum
                })
            ).then(()=>{
                history.push('/profile')
            });
        }catch (error)
        {
            console.log(error.message)
        }

    };

    return(
        <div>
            <div className='LoginPage'>
                <UserFormHeader/>
                <div>

                    {
                        invalidInputs
                            ? <p className="LoginPage_errorAlert"> اطلاعات ورودی معتبر نیست </p>
                            : null
                    }

                    <form onSubmit={submitLogin} className={`${df} LoginPage_form`}>
                        <p className="LoginPage_alert">
                            ثبت نام فقط با شماره تلفن امکان پذیر است
                        </p>
                        <div className="LoginPage_inputWrapper ">
                            <label>شماره تلفن خود را وارد کنید</label>
                            <div className="LoginPage_phoneInput">
                                <input
                                    type="phone"
                                    placeholder="09121234567"
                                    className=" "
                                    name="phoneNumber"
                                    value={inputsVal.phoneNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <button type="submit" className="LoginPage_LoginBtn">
                            دریافت کد فعال سازی
                        </button>

                    </form>

                    <div className={dc}>

                        {alerts.AlertType === 'error' && (
                            <Alert variant="danger" show={showError} onClose={()=>setShowError(false)} dismissible>
                                {alerts.AlertMessage ? alerts.AlertMessage.data.message : 'مشکلی پیش آمده است'}
                            </Alert>
                        )}

                        {alerts.AlertType === 'success' && (
                            <Alert variant="success" show={showSuccess} onClose={()=>setShowSuccess(false)} dismissible>
                                با موفقیت وارد شدید
                            </Alert>
                        )}

                        <form>
                            <div className="LoginPage_alertWrapper">
                                <p className="LoginPage_alert">
                                    برای شماره تلفن
                                    {' '}
                                    {editNumVal}
                                    {' '}
                                    کد تایید ارسال شد
                                </p>
                                <div className="LoginPage_editWrapper">
                                    <button
                                        className="LoginPage_editNum"
                                        onClick={handleEditNumBtn}
                                    >
                                        ویرایش شماره
                                    </button>
                                </div>
                            </div>
                        </form>

                        <form
                            className="LoginPage_form"
                            onSubmit={handleConfirmSubmit}
                        >
                            <div dir="rtl">
                                <label>کد تایید را وارد نمایید :</label>
                                <input
                                    className="w-50 mr-1"
                                    id="partitioned"
                                    onChange={handleVerifyInputChange}
                                    type="text"
                                    value={verifySMS}
                                />

                            </div>

                            <button type="submit" className="LoginPage_LoginBtn">
                                تایید کد فعال سازی
                            </button>

                        </form>
                        <div className="LoginPage_resendWrapper">
                            <div role="none" className="ml-3" onClick={resendCode}
                                 style={{cursor: resendCode ? 'pointer' : 'not-allowed'}}> دریافت مجدد کد تایید
                            </div>
                            {ReverseTimer.minutes}
                            {' '}
                            :
                            {ReverseTimer.seconds}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
