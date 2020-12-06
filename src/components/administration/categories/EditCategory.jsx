import React, { Fragment, useState, useEffect } from "react";
import CategoriesForm from "./CategoriesForm";
import { keyBy } from "lodash";
import { Redirect } from "react-router-dom";
import config from "../../../config";

function EditCategory({ match, credentials }) {
  const [category, setCategory] = useState(null);
  const [completado, setCompletado] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const loadCategory = async () => {
      let response = await fetch(
        `${config.baseUrl}/categories/${match.params.id}`
      );
      if (response.ok) {
        var category = await response.json();
        setCategory(category);
      } else {
        alert("Ha ocurrido un error");
      }
    };
    loadCategory();
  }, [match]);

  const editCategory = async (value) => {
    let response = await fetch(`${config.baseUrl}/categories/${category.id}`, {
      method: "PUT",
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
                <h2>Modificando una Categoria ya existente</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {!category && <p>Cargando datos de la Categoría</p>}
              {category && (
                <CategoriesForm
                  value={category}
                  onSubmit={editCategory}
                  errors={errors}
                />
              )}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default EditCategory;
