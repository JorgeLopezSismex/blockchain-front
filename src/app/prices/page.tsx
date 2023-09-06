"use client";

import { Main } from 'next/document';

import MainNav from '../components/main/MainNav';
import MainFoot from '../components/main/MainFoot';
import MainCard from '../components/main/MainCards';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Prices(){
    return(
        <div>
            <Container fluid>
                <Row>
                    <MainNav/>
                </Row>
                <Row>
                    <Col className='mb-5 mt-5'>
                        <h1>Precios</h1>
                    </Col>
                </Row>
                <Row>
                    <p>Nos adaptamos a tus necesidades.</p>
                </Row>
                <Row>
                    <Col> <MainCard/> </Col>
                    <Col> <MainCard/> </Col>
                    <Col> <MainCard/> </Col>
                </Row>
                <Row>
                    <MainFoot/>
                </Row>
            </Container>
        </div>
    );
}