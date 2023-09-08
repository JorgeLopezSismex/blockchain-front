"use client";

import "bootstrap/dist/css/bootstrap.css";
import MainNav from "../components/main/MainNav";
import MainFoot from "../components/main/MainFoot";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

export default function MainLayout({ children }) {
  return (
    <>
      <MainNav />
      {children}
      <MainFoot/>
    </>
  );
}
