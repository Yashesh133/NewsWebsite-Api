import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Categories() {
    const { cate } = useParams()
    console.log(cate)

    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${cate}&apiKey=187b6c02c60c4760b0284d8dd7d4d0d1`)
            .then(function (response) {
                setdata(response.data.articles)
                console.log(data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    }, [])
    return (
        <>
            <Header />
            <Container>
                <Row>
                    {
                        data.map((i) => {
                            return (
                                <>
                                    <Col className='col-4'>
                                        <div className="main-box">
                                            <div className="main-img">
                                                <img src={i.urlToImage}></img>
                                            </div>
                                            <div className="main-content">
                                                <div className="date d-flex ">
                                                    <p>Date:{i.publishedAt}</p>
                                                    <p>{i.author}</p>
                                                </div>
                                                <div className="title">
                                                    <h4>{i.title}</h4>
                                                </div>
                                                <div className="info">
                                                    <p>{i.content}</p>
                                                </div>
                                                <div className="more-btn">
                                                    <Button variant="primary"><a href={i.url}>view more</a></Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </>
                            )
                        })
                    }
                </Row>

            </Container>
        </>
    );
}

export default Categories;