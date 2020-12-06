import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import './../../styles/footer.css';

function Footer({ email, phone, date }) {

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer container-fluid">
        <div className="footer row">
          <div className="footer col-md-12">
            <h4><Link className="decorationItem" to={"/contact"} > CONTACTO: </Link></h4>
            <h6> &#57768; {email}</h6>
            <h6> &#9743; {phone}</h6>
            <br />
          </div>
        </div>
        <div className="footer centerText row">
        <div className="footer centerText col-md-1">
          </div>
          <div className="footer centerText col-md-10">
            <p> &copy; EspAcioAbierto {date}. Todos los derechos reservados.<br />
              <Link className="footerLinks" to={"/privacyPolicy"} target="_blank" ><span className="colorText">Aviso legal y política de privacidad</span></Link> |
              <Link className="footerLinks" to={"/cookiesPolicy"} target="_blank"><span className="colorText"> Política de cookies</span></Link></p>
          </div>
          <div className="footer centerText col-md-1">
          <Button className="decorationItem" variant="outline-light" onClick={scrollTop} > Subir </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
