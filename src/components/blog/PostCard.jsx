import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { truncate } from 'lodash';
import '../../styles/blog.css';

function PostCard({ post, credentials }) {
    
    return(

        <Card className="postCard">
            <Card.Img variant="top" src={`data:image/jpeg;base64,${post.picture}`} height="200px" width="100%" /> 
            <Card.Body>
                <Card.Title><Link className="titlePost card-link" to={`/post/${post.id}`} >{post.title}</Link></Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><span className="categoryPost">{post.categoryName.toUpperCase()}</span></Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted"><span className="authorPost">Posted by: </span>{post.userAlias}  |  {post.createDate}</Card.Subtitle>
                <Card.Text>

                    {/* Con la función  _.truncate([string=''], [options={}]) de la librería lodash
                        truncamos el contenido del post para mostrar una longitud limitada del mismo */}
                        
                    {truncate(post.content, {
                        length: 400,
                        separator: ' '
                    })}
                <Link className="changeFont card-link" to={`/post/${post.id}`} > LEER MÁS &raquo; </Link>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default PostCard;