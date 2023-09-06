"use client";

import { Main } from 'next/document';

import MainNav from '../components/main/MainNav';
import MainFoot from '../components/main/MainFoot';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AboutUs(){
    return(
        <div>
            <Container>
                <MainNav/> 
                <Row>
                    <Col>
                        <img></img>
                    </Col>
                    <Col>
                        <h1>¿Quienes somos?</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nam ut rutrum elit. Duis sit amet augue non dolor ultrices maximus molestie eu nibh. 
                        Curabitur iaculis lectus quis ornare imperdiet. Ut efficitur eget ligula sit amet blandit. 
                        Nulla viverra, quam molestie tincidunt suscipit, neque augue mollis massa, id lacinia felis diam sit amet felis. 
                        Sed maximus orci a magna posuere, ac lacinia urna efficitur. 
                        Aliquam sed urna sollicitudin, faucibus mauris et, fringilla est. 
                        Vestibulum cursus elementum nulla, et tristique odio malesuada ac. 
                        Sed vel nulla eu sem iaculis viverra vel in sem. Ut in bibendum mi, at ullamcorper risus. 
                        Phasellus pulvinar purus ac massa iaculis, sit amet scelerisque leo laoreet. 
                        Donec eu vehicula arcu. Maecenas finibus suscipit egestas. 
                        Fusce finibus massa a ipsum ultrices, in faucibus massa laoreet. 
                        Cras sagittis ut justo vitae auctor. Praesent in maximus nulla.
                        </p>
                        <h1>¿Cómo funciona?</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nam ut rutrum elit. Duis sit amet augue non dolor ultrices maximus molestie eu nibh. 
                        Curabitur iaculis lectus quis ornare imperdiet. Ut efficitur eget ligula sit amet blandit. 
                        Nulla viverra, quam molestie tincidunt suscipit, neque augue mollis massa, id lacinia felis diam sit amet felis. 
                        Sed maximus orci a magna posuere, ac lacinia urna efficitur. 
                        Aliquam sed urna sollicitudin, faucibus mauris et, fringilla est. 
                        Vestibulum cursus elementum nulla, et tristique odio malesuada ac. 
                        Sed vel nulla eu sem iaculis viverra vel in sem. Ut in bibendum mi, at ullamcorper risus. 
                        Phasellus pulvinar purus ac massa iaculis, sit amet scelerisque leo laoreet. 
                        Donec eu vehicula arcu. Maecenas finibus suscipit egestas. 
                        Fusce finibus massa a ipsum ultrices, in faucibus massa laoreet. 
                        Cras sagittis ut justo vitae auctor. Praesent in maximus nulla.
                        </p>
                    </Col>
                </Row> 
                <Row>
                    <MainFoot/>
                </Row>
            </Container>  
            
        </div>
    );
}