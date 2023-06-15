import React from 'react';
import './style.css';  
import { Col, Container , Row } from 'react-bootstrap';

function Header(props) {
    return (
        <>
            <div>
                <Container>
                    <Row className='justify-content-center align-items-center'>
                        <Col className="logo col-3">
                            <h1>Logo</h1>
                        </Col>
                        <Col className="menu">
                            <ul className='d-flex main-menu'>
                                <li className='p-4'><a href={`/`}>Home</a></li>
                                <li className='p-4'><a href={`/Categories/business`}>Business</a></li>
                                <li className='p-4'><a href={`/Categories/Entertainment`}>Entertainment</a></li>
                                <li className='p-4'><a href={`/Categories/sports`}>Sports</a></li>
                                <li className='p-4'><a href={`/Categories/health`}>Health</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Header;