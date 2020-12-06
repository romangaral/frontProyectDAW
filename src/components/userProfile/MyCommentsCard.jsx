import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/userProfile.css';


function MyComments({credentials}) {
  
  console.log(credentials);

    return (
        <Card className="container-fluid">
        <Card.Body>
          <Card.Title className="greenText">Mis Comentarios</Card.Title>
          <Card.Text>Visualiza todos los Comentarios que hayas publicado</Card.Text>
          <Link className="profile decorationItem card-link" to={'/myComments'}>Click</Link>
        </Card.Body>
      </Card>
    );
    
}

export default MyComments;