"use client";
import { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import ProfileCard from '../../components/admin/ProfileCard';

export default function Profile(){
    return(
        <>
            <Container fluid className='px-5 pt-4'>
                <Row className='pb2'>
                    <Col>
                        <h1>Perfil</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <ProfileCard
                        title={"Verificación"}
                        text1={"Estado de verificación: "}
                        text2={"Sin verificar"}
                        action={"Gestionar"}
                        link={"/admin/update"}
                        />
                    </Col>
                    <Col xs={12}>
                        <ProfileCard
                        title={"Subscripción"}
                        text1={"Activo desde: "}
                        text2={"12/12/2023"}
                        action={"Gestionar"}
                        link={"/admin/update"}
                        />
                    </Col>
                    <Col xs={12}>
                        <ProfileCard
                        title={"user@mail.com"}
                        text1={"Cuenta creada: "}
                        text2={"12/12/2023"}
                        action={"Cambiar contraseña"}
                        link={"/admin/update"}
                        />
                    </Col>
                    <Col xs={12}>
                        <ProfileCard
                        title={"General"}
                        text1={"Ajustes generales de cuenta."}
                        text2={""}
                        action={"Gestionar"}
                        link={"/admin/update"}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}