import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { truncate } from "lodash";
import config from "../../../config";

function CategoriesTable({ categories, setCategories, credentials }) {
  function deleteCategory(id) {
    fetch(`${config.baseUrl}/categories/${id}`, {
      method: "DELETE",
      headers: { Authorization: credentials.header },
    }).then((response) => {
      if (response.ok) {
        setCategories(categories.filter((category) => category.id !== id));
      } else {
        alert("Error al borrar una Categoría");
      }
    });
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Table bordered hover responsive size="sm">
            <thead>
              <tr>
                <th>Color</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Modificar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {categories.length > 0 ? (
                categories.map((category, i) => (
                  <tr key={`category_${i}`}>
                    <td>{category.color}</td>
                    <td>{category.name}</td>
                    <td>
                      {truncate(category.description, {
                        length: 50,
                        separator: " ",
                      })}
                    </td>
                    <td className="text-center">
                      <Link
                        to={`/administrador/categorias/editar-categoria/${category.id}`}
                        variant="outline-secondary"
                        className="btn btn-outline-secondary btn-sm"
                      >
                        Modificar
                      </Link>
                    </td>
                    <td className="text-center">
                      <Button
                        onClick={() => {
                          deleteCategory(category.id);
                        }}
                        variant="outline-secondary"
                        size="sm"
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5}>No hay Categorías</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default CategoriesTable;
