import React from "react";

import ClientCard from "../main/ClientCard";
import Carousel from "react-bootstrap/Carousel";

function ClientCarousel() {
    let clients = [
        {
          id: 1,
          name: "William Hartnell",
          image: "https://portcities.net/web/image/10272/phone9.png",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          date:"Some day i don't remember",
        },
        {
          id: 2,
          name: "Patrick Troughton",
          image: "https://portcities.net/web/image/10272/phone9.png",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          date:"Some day i don't remember",
        },
        {
          id: 3,
          name: "Jon Pertwee",
          image: "https://portcities.net/web/image/10272/phone9.png",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          date:"Some day i don't remember",
        },
        {
          id: 4,
          name: "Peter Capaldi",
          image: "https://portcities.net/web/image/10272/phone9.png",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          date:"Some day i don't remember",
        },
        {
          id: 5,
          name: "Paul McGann",
          image: "https://portcities.net/web/image/10272/phone9.png",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          date:"Some day i don't remember",
        },
        {
            id: 6,
            name: "Matt Smith",
            image: "https://portcities.net/web/image/10272/phone9.png",
            description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            date:"Some day i don't remember",
          },
      ];

    return (
        <Carousel>
          
          {clients.map((client) =>(
            <Carousel.Item>
              <ClientCard
                name= {client.name}
                image= {client.image}
                description= {client.description}
                date= {client.date}
              />
              </Carousel.Item>
          ))}

        </Carousel>
    );
  }
  export default ClientCarousel;