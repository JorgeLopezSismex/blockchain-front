"use client";
//Ventana About us (*/ω＼*)
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function AboutUs() {
  return (
    <section>
      <Container>
        <Row>

          <Col xs={12} lg={5} className="px-3 py-3">
            <Image
              style={{ width: "100%" }}
              src="https://static.vecteezy.com/system/resources/previews/005/915/627/non_2x/hand-drawn-doodle-set-of-blockchain-theme-items-round-composition-sketch-style-cryptocurrency-electronic-commerce-concept-illustration-vector.jpg"
            ></Image>
          </Col>

          <Col xs={12} lg={7} className="px-5 py-3 align-items-center" style={{display:'flex'}}>
            <div className="wrapper align-left">
              <h2 style={{fontSize:'50px'}}>Blockchain</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nullam velit risus, dictum et nibh vel, pretium rhoncus est. 
              Suspendisse id odio ac libero eleifend dapibus eget a leo. 
              Sed aliquet metus nec est hendrerit, et viverra elit maximus. 
              Nullam a nibh tristique, molestie lectus in, feugiat neque. 
              Cras placerat ligula quis feugiat fermentum. 
              Praesent posuere ac dui sit amet vehicula. 
              Proin est orci, maximus nec gravida in, sagittis vestibulum neque. 
              Proin nec posuere nunc, et pharetra ante. Morbi et orci mauris. 
              Praesent mollis lacinia orci, a pulvinar diam pulvinar a.
              </p>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}
