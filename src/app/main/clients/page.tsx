"use client";
//Ventana de clientes (╯°□°）╯︵ ┻━┻

import { CardGroup, Col, Container, Row } from "react-bootstrap";
import PricingCard from "../../components/main/PricingCard";
//import ClientCarousel from '../../components/main/ClientCarousel';
import Carousel from "react-bootstrap/Carousel";
import ClientCard from "../../components/main/ClientCard";

let plans = [
  {
    id: 1,
    name: "Cliente Uno",
    price: "Cliente Uno",
    description: "Free plan",
  },
  {
    id: 2,
    name: "Cliente 2",
    price: "Cliente 2",
    description: "Max plan",
  },
  {
    id: 3,
    name: "Cliente 3",
    price: "Cliente 3",
    description: "Newer plan for users",
  },
];

export default function Clients() {
  return (
    <div>
      <Container className="d-flex flex-column min-vh-100">
        <Row>
          <Col className="my-4">
            <h1 style={{ textAlign: "center" }}>
              Qué dicen los usuarios sobre nuestros
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="md-12">
            <Carousel
              className="align-items-center"
              style={{ display: "flex" }}
            >
              <Carousel.Item>
                <CardGroup>
                  <ClientCard
                    name={"John Doe"}
                    image={"https://portcities.net/web/image/10272/phone9.png"}
                    description={
                      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    }
                    date={"Some day I don't remember"}
                  />
                  <ClientCard
                    name={"John Smith"}
                    image={"https://portcities.net/web/image/10272/phone9.png"}
                    description={
                      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    }
                    date={"Some day I don't remember"}
                  />
                  <ClientCard
                    name={"John Williams"}
                    image={"https://portcities.net/web/image/10272/phone9.png"}
                    description={
                      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    }
                    date={"Some day I don't remember"}
                  />
                </CardGroup>
              </Carousel.Item>
              <Carousel.Item>
                <CardGroup>
                  <ClientCard
                    name={"Paul McGann"}
                    image={"https://portcities.net/web/image/10272/phone9.png"}
                    description={
                      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    }
                    date={"Some day I don't remember"}
                  />
                  <ClientCard
                    name={"Paul Bettany"}
                    image={"https://portcities.net/web/image/10272/phone9.png"}
                    description={
                      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    }
                    date={"Some day I don't remember"}
                  />
                  <ClientCard
                    name={"Paul Rudd"}
                    image={"https://portcities.net/web/image/10272/phone9.png"}
                    description={
                      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    }
                    date={"Some day I don't remember"}
                  />
                </CardGroup>
              </Carousel.Item>
              <Carousel.Item className="mx-auto my-auto ">
                <CardGroup>
                  <ClientCard
                    name={"Chris Evans"}
                    image={"https://portcities.net/web/image/10272/phone9.png"}
                    description={
                      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    }
                    date={"Some day I don't remember"}
                  />
                  <ClientCard
                    name={"Chris Pratt"}
                    image={"https://portcities.net/web/image/10272/phone9.png"}
                    description={
                      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    }
                    date={"Some day I don't remember"}
                  />
                  <ClientCard
                    name={"Chris Pine"}
                    image={"https://portcities.net/web/image/10272/phone9.png"}
                    description={
                      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    }
                    date={"Some day I don't remember"}
                  />
                </CardGroup>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


// return (
//   <div>
//     <Container>
//       <Row>
//         <Col><h1 style={{textAlign:'center'}}>Clientes</h1></Col>
//       </Row>
//       <Row>
//         <Col className="md-12">
//           <Carousel className="align-items-center" style={{display: "flex"}}>
//             <Carousel.Item>
//               <CardGroup>
//                 <ClientCard
//                   name= {"John Doe"}
//                   image= {"https://portcities.net/web/image/10272/phone9.png"}
//                   description= {"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
//                   date= {"Some day I don't remember"}
//                 />
//                 <ClientCard
//                   name= {"John Smith"}
//                   image= {"https://portcities.net/web/image/10272/phone9.png"}
//                   description= {"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
//                   date= {"Some day I don't remember"}
//                 />
//                 <ClientCard
//                   name= {"John Willis"}
//                   image= {"https://portcities.net/web/image/10272/phone9.png"}
//                   description= {"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
//                   date= {"Some day I don't remember"}
//                 />
//               </CardGroup>
//             </Carousel.Item>
//             <Carousel.Item>
//               <CardGroup>
//                 <ClientCard
//                   name= {"Paul McGann"}
//                   image= {"https://portcities.net/web/image/10272/phone9.png"}
//                   description= {"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
//                   date= {"Some day I don't remember"}
//                 />
//                 <ClientCard
//                   name= {"Paul Bettany"}
//                   image= {"https://portcities.net/web/image/10272/phone9.png"}
//                   description= {"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
//                   date= {"Some day I don't remember"}
//                 />
//                 <ClientCard
//                   name= {"Paul Rudd"}
//                   image= {"https://portcities.net/web/image/10272/phone9.png"}
//                   description= {"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
//                   date= {"Some day I don't remember"}
//                 />
//               </CardGroup>
//             </Carousel.Item>
//             <Carousel.Item className="mx-auto my-auto ">
//               <CardGroup>
//                 <ClientCard
//                   name= {"Chris Evans"}
//                   image= {"https://portcities.net/web/image/10272/phone9.png"}
//                   description= {"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
//                   date= {"Some day I don't remember"}
//                 />
//                 <ClientCard
//                   name= {"Chris Pratt"}
//                   image= {"https://portcities.net/web/image/10272/phone9.png"}
//                   description= {"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
//                   date= {"Some day I don't remember"}
//                 />
//                 <ClientCard
//                   name= {"Chris Pine"}
//                   image= {"https://portcities.net/web/image/10272/phone9.png"}
//                   description= {"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
//                   date= {"Some day I don't remember"}
//                 />
//               </CardGroup>
//             </Carousel.Item>
//           </Carousel>
//         </Col>
//       </Row>
//     </Container>
//   </div>
// );

