
import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

function RolesForm({ value, onSubmit, errors }) {

    const [role, setRole] = useState(value);

    const onChange = (e) => {
        setRole({
            ...role,
            [e.target.name]: e.target.value,
        });
    }

    const onInternalSubmit = (e) => {
        e.preventDefault();
        onSubmit(role);
    }

    return (
        <div className="addForm container-fluid">
            <div className="addForm row">
                <div className="addForm col-md-12">
                    <Form id="rolesForm" onSubmit={onInternalSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="12">
                                <Form.Label> Nombre del Rol: </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Nombre del nuevo Rol"
                                    value={role.name}
                                    onChange={onChange}
                                    isInvalid={errors.name}
                                />
                                <Form.Control.Feedback type="invalid" >
                                    {errors.name?.defaultMessage}
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

export default RolesForm;