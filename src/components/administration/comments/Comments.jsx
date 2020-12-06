import React, { Fragment, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import CommentsTable from './CommentsTable';
import Pagination from '../../funcionalities/Pagination';
import '../../../styles/pagination.css';

function Comments({ credentials }) {

     const [comments, setComments] = useState([]);
     const [page, setPage] = useState(0);
     const [pages, setPages] = useState(0);

     useEffect(() => {
          fetch(`http://localhost:8090/comments?page=${page}`, {
               headers: { 'Authorization': credentials.header }
          })
               .then((response) => response.json())
               .then((commentsPage) => {
                    setComments(commentsPage.content);
                    setPages(commentsPage.totalPages);
               });
     }, [setComments, page, credentials]);

     if (credentials.role === "ADMIN") {
          return (
               <Fragment>
                    <CommentsTable comments={comments} setComments={setComments} credentials={credentials} />
                    <Pagination page={page} pages={pages} setPage={setPage} />
               </Fragment>
          );
     } else {
          return <Redirect to="/" />
     }
}

export default Comments;