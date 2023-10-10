"use client";
import "bootstrap/dist/css/bootstrap.css";

import { Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AdminCardContainer from "@/components/admin/AdminCardContainer";

export default function Subscription() {
  return (
    <Fragment>
      <AdminCardContainer xs={8}>
        <Row>
          <Col xs={12} className="flex flex-wrap justify-between">
            <div className="d-inline text-small">Plan estandar</div>
            <div className="d-inline text-right">fsfds</div>
          </Col>
        </Row>
      </AdminCardContainer>
      <AdminCardContainer xs={8}>Este es elc onenido</AdminCardContainer>
    </Fragment>
  );
}
