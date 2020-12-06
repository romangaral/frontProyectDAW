
import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import '../../../styles/administration.css';


function AdvertisersForm({ value, onSubmit, errors }) {

    const [advertiser, setAdvertiser] = useState(value);

    const onChange = (e) => {
        setAdvertiser({
            ...advertiser,
            [e.target.name]: e.target.value,
        });
    };

    const onInternalSubmit = (e) => {
        e.preventDefault();
        onSubmit(advertiser);
    }

    return (
        <div className="addForm container-fluid">
            <div className="addForm row">
                <div className="addForm col-md-12">
                    <Form id="advertisersForm" onSubmit={onInternalSubmit}>
                        <Form.Group>
                            <Form.Label>Nombre: </Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Nombre del Anunciante"
                                value={advertiser.name}
                                onChange={onChange}
                                isInvalid={errors.name}
                            />
                            <Form.Control.Feedback type="invalid" >
                                {errors.name?.defaultMessage}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} md="7">
                                <Form.Label>Email: </Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Email del Anunciante"
                                    value={advertiser.email}
                                    onChange={onChange}
                                    isInvalid={errors.email}
                                />
                                <Form.Control.Feedback type="invalid" >
                                    {errors.email?.defaultMessage}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="5">
                                <Form.Label>Núm. de Cuenta: : </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="accountNumber"
                                    placeholder="ES12 1234 1234 01 0123456789"
                                    value={advertiser.accountNumber}
                                    onChange={onChange}
                                    isInvalid={errors.accountNumber}
                                />
                                <Form.Control.Feedback type="invalid" >
                                    {errors.accountNumber?.defaultMessage}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Button type="submit" variant="outline-secondary">GUARDAR</Button><br />
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default AdvertisersForm;