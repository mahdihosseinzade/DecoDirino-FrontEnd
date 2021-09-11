import React from "react";
import "./DesignOrder.scss";
import Order from "../../../../assets/images/Order.jpg";
import {Button} from "react-bootstrap";
import Strings from "../../../../assets/strings/strings";

const DesignOrder =()=>{
    return(
        <div className="DesignOrder d-flex flex-row justify-content-around">
            <img src={Order} alt="1" className="Dimg"/>
            <div className="BoxOrder d-flex flex-column align-items-end">

                <h1 className="HOrder m-4">
                    طراحی داخلی
                </h1>
                <text className="txtOrder m-3" >
                    {Strings.DesignOrder}
                </text>

                <Button className="btnOrder align-self-start mt-4" href="/order">
                    ثبت سفارش طراحی
                </Button>
            </div>

        </div>
    );
}

export default DesignOrder;
