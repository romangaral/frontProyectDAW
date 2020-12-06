import React from "react";
import { Jumbotron } from "react-bootstrap";

function AboutUs() {
  
  return (

    <Jumbotron fluid>
      <div className="aboutUsContainer">
        <h2 className="aboutUsTitle">Sobre Nosotros </h2>
        <p className="capitalLetter">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam consectetur enim id suscipit blandit. Aliquam ultrices leo id orci
          tristique, sit amet sollicitudin lectus ornare. Vivamus malesuada orci
          eu scelerisque tincidunt. Pellentesque porttitor, neque ut tempus finibus, sapien orci
          pharetra massa, at pharetra nunc dolor maximus nunc. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nullam laoreet elit ultricies
          odio iaculis, neque ut tempus finibus, cursus cursus lorem accumsan. Sed justo lorem
          ornare a dictum non, dictum vel nisl.</p>
      </div>
    </Jumbotron>
  );
}

export default AboutUs;
