import React, { Fragment, useState } from "react";
import { keyBy } from "lodash";
import CategoriesForm from "./CategoriesForm";
import { Redirect } from "react-router-dom";
import config from "../../../config";

function AddCategory({ credentials }) {
  const category = {
    color: "",
    name: "",
    description: "",
  };
  const [completado, setCompletado] = useState(false);
  const [errors, setErrors] = useState({});

  const onSubmit = async (value) => {
    let response = await fetch(`${config.baseUrl}/categories`, {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-type": "application/json",
        Authorization: credentials.header,
      },
    });
    let data = await response.json();

    if (response.ok) {
      console.log(data);
      setCompletado(true);
    } else {
      let newErrors = keyBy(data, (error) => error.field);
      console.log(newErrors);
      setErrors(newErrors);
    }
  };

  if (completado) {
    return <Redirect to="/administrador/categorias" />;
  } else {
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="formTitle">
                <h2>Añadiendo una nueva Categoría</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <CategoriesForm
                value={category}
                onSubmit={onSubmit}
                errors={errors}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AddCategory;
