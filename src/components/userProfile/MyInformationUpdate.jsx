import React, { Fragment, useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { keyBy } from "lodash";
import "../../styles/userProfile.css";
import config from "../../config";

function MyInformationUpdate({ credentials }) {
  console.log(credentials);

  const [user, saveUser] = useState({
    name: "",
    surnames: "",
    email: "",
    alias: "",
    password: "",
    confirm: "",
    picture: "",
  });

  const [errors, setErrors] = useState({});

  //Función que coloca los nuevos elementos en el State de User
  const onChange = (e) => {
    saveUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //Cuando el usuario quiere modificar sus datos
  const onSubmit = async (e) => {
    e.preventDefault();

    //OJO. FALTA METER EL ID EN LA URL

    let response = await fetch(`${config.baseUrl}/users`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
        Authorization: credentials.header,
      },
    });
    let data = await response.json();
    if (response.ok) {
      console.log(data);
      // routeChange();
    } else {
      let newErrors = keyBy(data, (error) => error.field);
      console.log(newErrors);
      setErrors(newErrors);
    }
  };

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h2>Actualiza tus Datos de Registro</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Form className="updateUser" onSubmit={onSubmit}>
              <Form.Row>
                <Form.Group as={Col} md="7" controlId="formBasicName">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Nombre: "
                    value={user.name}
                    onChange={onChange}
                    isInvalid={errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name?.defaultMessage}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="formBasicPicture">
                  <Form.Control
                    value={user.profile}
                    onChange={onChange}
                    isInvalid={errors.confirm}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.confirm?.defaultMessage}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="7" controlId="formBasicSurnames">
                  <Form.Control
                    type="text"
                    name="surnames"
                    placeholder="Apellidos: "
                    value={user.surnames}
                    onChange={onChange}
                    isInvalid={errors.surnames}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.surnames?.defaultMessage}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="7" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email: "
                    value={user.email}
                    onChange={onChange}
                    isInvalid={errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email?.defaultMessage}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="7" controlId="formBasicAlias">
                  <Form.Control
                    type="text"
                    name="alias"
                    placeholder="Alias: "
                    value={user.alias}
                    onChange={onChange}
                    isInvalid={errors.alias}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.alias?.defaultMessage}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="7" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Contraseña: "
                    value={user.password}
                    onChange={onChange}
                    isInvalid={errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password?.defaultMessage}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="7" controlId="formBasicConfirm">
                  <Form.Control
                    type="password"
                    name="confirm"
                    placeholder="Confirma tu Contraseña: "
                    value={user.confirm}
                    onChange={onChange}
                    isInvalid={errors.confirm}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.confirm?.defaultMessage}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Button type="submit" variant="outline-success">
                Guardar
              </Button>
              <Link to={"/userProfile"} className="returLink">
                <Button variant="outline-success">Cancelar</Button>
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MyInformationUpdate;
