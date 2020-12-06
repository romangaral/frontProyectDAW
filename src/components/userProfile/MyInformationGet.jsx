import React from 'react';
import { Table} from 'react-bootstrap';

function MyInformationGet() {

    //const[user, setUser] = useState([]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h2>Comprueba y edita tus datos de registro</h2>
                    <Table bordered hover responsive size="sm">
            {/* <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Alias</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {user.map((user, i) => (
                  <tr key={`user_${i}`}>
                   <td>{user.pistureProfiles}</td>
                    <td>{user.name}</td>
                    <td>{user.surnames}</td>
                    <td>{user.alias}</td>
                    <td>{user.password}</td>
                    <td className="text-center">
                      <Button
                        href={`/myInformationupdate/${user.id}`}
                        variant="outline-secondary"
                        size="sm"
                      >Modificar</Button>
                    </td>
                    <td className="text-center">
                      <Button
                        onClick={() => { deleteUser(user.id) }}
                        variant="outline-secondary"
                        size="sm"
                      >Eliminar</Button>
                    </td>
                  </tr>
                ))}
            </tbody> */}
          </Table>
                </div>
            </div>
        </div>
    );
}
export default MyInformationGet;