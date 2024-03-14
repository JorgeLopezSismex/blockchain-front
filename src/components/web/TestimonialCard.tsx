import "../../app/globals.css";
import Image from "next/image";

import { Card, Col } from "react-bootstrap";

export default function TestimonialCard() {
  return (
    <Col xs={12} md={6}>
      <Card className="testimonial-card">
        <Image
          width={140}
          height={140}
          src="/web/testimonials/photo.jpg"
          alt="fssdfsd"
          className="testimonial-card-image"
        ></Image>
        <div className="card-body">
          <p className="testimonial-card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="testimonial-text-container d-flex align-items-end">
            <h5 className="testimonial-card-title d-flex align-items-end">
              NOMBRE APELLIDO
              <h6 className="testimonial-card-subtitle">Social Marketing</h6>
            </h5>
          </div>
        </div>
      </Card>
    </Col>
  );
}
