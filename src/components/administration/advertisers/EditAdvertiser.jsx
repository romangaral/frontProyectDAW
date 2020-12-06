import React, { Fragment, useState, useEffect } from "react";
import AdvertisersForm from "./AdvertisersForm";
import { keyBy } from "lodash";
import { Redirect } from "react-router-dom";
import config from "../../../config";

function EditAdvertiser({ match, credentials }) {
  const [advertiser, setAdvertiser] = useState(null); //Lo pongo a null porque no quiero que se muestre el formulario hasta tener el anunciante
  const [completado, setCompletado] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const loadAdvertiser = async () => {
      let response = await fetch(
        `${config.baseUrl}/advertisers/${match.params.id}`,
        {
          headers: {
            Authorization: credentials.header,
          },
        }
      );
      if (response.ok) {
        var advertiser = await response.json();
        setAdvertiser(advertiser);
      } else {
        alert("Ha ocurrido un error");
      }
    };
    loadAdvertiser();
  }, [match, credentials]);

  const editAdvertiser = async (value) => {
    let response = await fetch(
      `${config.baseUrl}/advertisers/${advertiser.id}`,
      {
        method: "PUT",
        body: JSON.stringify(value),
        headers: {
          "Content-type": "application/json",
          Authorization: credentials.header,
        },
      }
    );
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
    return <Redirect to="/administrador/anunciantes" />;
  } else {
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="formTitle">
                <h2>Modificando un Anunciante ya existente</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {!advertiser && <p>Cargando datos del Anunciante</p>}
              {advertiser && (
                <AdvertisersForm
                  value={advertiser}
                  onSubmit={editAdvertiser}
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

export default EditAdvertiser;
