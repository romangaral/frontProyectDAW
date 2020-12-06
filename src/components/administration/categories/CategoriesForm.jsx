import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import '../../../styles/administration.css';


function CategoriesForm({ value, onSubmit, errors }) {

    const [category, setCategory] = useState(value);

    const onChange = (e) => {
        setCategory({
            ...category,
            [e.target.name]: e.target.value,
        });
    }

    const onInternalSubmit = (e) => {
        e.preventDefault();
        onSubmit(category);
    }

    return (
        <div className="addForm container-fluid">
            <div className="addForm row">
                <div className="addForm col-md-12">
                    <Form id="categoriesForm" onSubmit={onInternalSubmit} >
                        <Form.Row>
                            <Form.Group as={Col} md="3">
                                <Form.Label>Color:</Form.Label>
                                <Form.Control
                                    type="color"
                                    name="color"
                                    value={category.color}
                                    onChange={onChange}
                                    isInvalid={errors.color}
                                />
                                <Form.Control.Feedback type="invalid" >
                                    {errors.color?.defaultMessage}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="9">
                                <Form.Label>Nombre:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Categoría"
                                    value={category.name}
                                    onChange={onChange}
                                    isInvalid={errors.name}
                                />
                                <Form.Control.Feedback type="invalid" >
                                    {errors.name?.defaultMessage}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Label>Descripción:</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                placeholder="Descripción breve de lo que incluye..."
                                value={category.description}
                                onChange={onChange}
                            />
                        </Form.Group>
                        <Button type="submit" variant="outline-secondary">GUARDAR CATEGORÍA</Button><br />
                    </Form>
                </div>
            </div>
        </div>

    );
}

export default CategoriesForm;