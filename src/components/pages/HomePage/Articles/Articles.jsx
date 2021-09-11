import React , {useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {getArticleAsync} from "../../../../store/Article/ArticleActions";
import "./Articles.scss";
import ArticleImg from "../../../../assets/images/horizontalSlider.jpg";
import Strings from "../../../../assets/strings/strings";
import {Card} from "react-bootstrap";
import{v4 as uuidv4} from 'uuid';

const Articles =()=>{

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getArticleAsync())
    },[dispatch]);
    const articles = useSelector((state) => state.Article.Articles);




    return(
        <div className='HArticleBg d-flex flex-column align-items-center'>
            <p>{Strings.Articles}</p>
            <div className='CardsList d-flex flex-row justify-content-around flex-wrap '>
                {
                    articles ?
                    articles.map((Item)=>{
                        return(
                            <Card className="HArticleCard" name={Item.subject} id={uuidv4()} key={uuidv4()} >
                                <Card.Header className="CardHeader">
                                    <img className='HArticleImg' src={ArticleImg} alt={Item.subject}/>
                                </Card.Header>
                                <Card.Body className="CardBody">
                                    <text className="">{Item.shortText}</text>
                                </Card.Body>
                            </Card>
                        );
                    })
                        :null

                }
            </div>
        </div>
    );
}

export default Articles;
