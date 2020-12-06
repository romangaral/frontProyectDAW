import React, { Fragment } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TopNav from '../components/header/topNav/TopNav';
import './../styles/header.css';


function HeaderAdmin({children, titleWeb, credentials }) {

  return (
    <Fragment>
      <header className="header">
        <div className="header container-fluid">
          <div className="header row">
            <div className="header col-md-12">
              <div className="headerTitle">
                <h1><Link className="title decorationItem" to={'/'} >{titleWeb}</Link></h1>
                <TopNav credentials={credentials} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
  <div className="col-md-12"><h1 className="changeTextAdmin">Panel Administración</h1></div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Nav fill className="adminNav justify-content" >
              <Nav.Item><Link className="adminNav-item nav-link" to="/administrador" >INICIO</Link></Nav.Item>
              <Nav.Item><Link className="adminNav-item nav-link" to="/administrador/usuarios" >USUARIOS</Link></Nav.Item>
              <Nav.Item><Link className="adminNav-item nav-link" to="/administrador/roles" >ROLES</Link></Nav.Item>
              <Nav.Item><Link className="adminNav-item nav-link" to="/administrador/posts" >POSTS</Link></Nav.Item>
              <Nav.Item><Link className="adminNav-item nav-link" to="/administrador/categorias" >CATEGORIAS</Link></Nav.Item>
              <Nav.Item><Link className="adminNav-item nav-link" to="/administrador/comentarios" >COMENTARIOS</Link></Nav.Item>
              <Nav.Item><Link className="adminNav-item nav-link" to="/administrador/denuncias" >DENUNCIAS</Link></Nav.Item>
              <Nav.Item><Link className="adminNav-item nav-link" to="/administrador/anunciantes" >ANUNCIANTES</Link></Nav.Item>
            </Nav>
          </div>
        </div>
      </div>

      {children}

    </Fragment>
  );
}

export default HeaderAdmin;