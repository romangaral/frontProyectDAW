
import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { truncate } from 'lodash';


function CommentsTable({ comments, setComments, credentials }) {

    function deleteComment(id) {
        fetch(`http://localhost:8090/comments/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": credentials.header
            }
        }).then((response) => {
            if (response.ok) {
                //Filtro los comentarios para que me los muestre todos menos el que acabo de eliminar
                setComments(comments.filter(comment => comment.id !== id));
            } else {
                alert('Error al borrar un Comentario');
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
                                <th>Fecha</th>
                                <th>Contenido</th>
                                <th>Usuario</th>
                                <th>Post</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comments.length > 0 ? (
                                comments.map((comment, i) => (
                                    <tr key={`comment_${i}`}>
                                        <td className="text-center">{comment.createDate}</td>
                                        <td>{truncate(comment.content, { length: 60 })}</td>
                                        <td>{comment.userAlias}</td>
                                        <td className="text-center">{comment.postId}</td>
                                        <td className="text-center">
                                            <Button
                                                onClick={() => { deleteComment(comment.id); }}
                                                variant="outline-secondary"
                                                size="sm"
                                            >Eliminar</Button>
                                        </td>
                                    </tr>
                                ))
                            ) : (<tr><td colSpan={5}>No hay Comentarios</td></tr>)}
                        </tbody>
                    </Table>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                </div>
            </div>
        </div>



    );
}

export default CommentsTable;