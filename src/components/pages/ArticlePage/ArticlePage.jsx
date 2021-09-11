import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getArticleAsync} from "../../../store/Article/ArticleActions";
import Strings from "../../../assets/strings/strings";
import {v4 as uuidv4} from "uuid";
import ArticleImg from "../../../assets/images/horizontalSlider.jpg";
import {Button, Card, Form} from "react-bootstrap";
import './ArticlePage.scss';

const ArticlePage =()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getArticleAsync())
    },[dispatch]);
    const articles = useSelector((state) => state.Article.Articles);


    return(
        <div className="ArticlesPage d-flex flex-column justify-content-around align-items-center">


            <div className="FilterBox d-flex flex-column m-4 p-3">

                <Form className="d-flex flex-row align-items-center" dir="rtl">

                    <Form.Group className="d-flex flex-rows align-items-center justify-content-around  w-25 ml-3 " dir="rtl">

                        <Form.Label>
                            موضوع :
                        </Form.Label>

                        <Form.Control type="text" placeholder="موضوع" className="FormContorol w-75"/>

                    </Form.Group>

                    <Form.Group className="d-flex flex-row align-items-center justify-content-around w-50 ml-3" dir="rtl">

                        <Form.Label>
                            کلمات کلیدی :
                        </Form.Label>

                        <Form.Control type="text" placeholder="کلمات کلیدی" className=" FormContorol w-75 "/>

                    </Form.Group>

                    <Form.Group className="d-flex flex-row align-items-center justify-content-around w-25 ml-3" dir="rtl">

                        <Form.Label>
                            مرتب سازی براساس
                        </Form.Label>

                        <select aria-label="هیچ کدام" className=" FormContorol w-50">
                            <option value="nothing"> هیج کدام</option>
                            <option value="time"> زمان انتشار </option>
                            <option value="time"> محبوبیت </option>
                            <option value="time"> تعداد بازدید </option>

                        </select>

                    </Form.Group>

                    <Button className="btnSubmitF mr-5" type="submit">
                        جست و جو
                    </Button>

                </Form>

            </div>


            <div className="d-flex flex-row justify-content-around mb-4" dir="rtl">


                <div className='CardList d-flex flex-column  w-100' dir="rtl">
                    {
                        articles ?
                            articles.map((Item)=>{
                                return(
                                    <Card className="ArticleCard" name={Item.subject} id={uuidv4()} key={uuidv4()}>
                                        <Card.Header>
                                            {/*<img className='ArticleImg' src={ArticleImg} alt={Item.subject}/>*/}
                                            <h5>
                                                {Item.subject}
                                            </h5>
                                        </Card.Header>
                                        <Card.Body className="d-flex flex-row">
                                            <img className='ArticleImg' src={ArticleImg} alt={Item.subject}/>

                                            <text >{Item.shortText}</text>
                                        </Card.Body>
                                    </Card>
                                );
                            }):null

                    }
                </div>


                <div className="TopArticles">

                </div>
            </div>

        </div>
    );
}

export default ArticlePage;
