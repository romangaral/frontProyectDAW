import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/userProfile.css';

function MyInformation({credentials}) {
    console.log(credentials);
    return (
        <Fragment>
            <Card className="myInformation container-fluid">
                <Card.Body>
                    <Card.Title className="greenText">Mis Datos Personales</Card.Title>
                    <Card.Text>Consulta, completa o modifica tus Datos Personales </Card.Text>
                    <Link className="profile decorationItem card-link" to={'/myInformationGet'} >Click</Link>
                </Card.Body>
            </Card>
        </Fragment>

    );
}

export default MyInformation;