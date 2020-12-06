import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";

function Logout({ credentials }) {

    const onSubmit = {}
    return (
        <Fragment>
            <div className="logout container-fluid">
                <div className="logout row">
                    <div className="logout col-md-12">
                        <h1 className="titleLogout">Desconectarse:</h1>
                        <Form className="logoutForm" onSubmit={onSubmit} >
                            <p>Pulsa el botón para desconectarte de tú cuenta si lo deseas</p>
                            <Button type="submit" variant="outline-success">LOGOUT</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Logout;
