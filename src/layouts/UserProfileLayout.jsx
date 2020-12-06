import React, { Fragment } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TopNav from './../components/header/topNav/TopNav';
import BottomNav from './../components/header/bottomNav/BottomNav';
import { ocio } from "../images/indexImages";
//import ocio_asturias from './../images/ocio_asturias.jpg';
import './../styles/header.css';
import '../styles/userProfile.css';

function UserProfileLayout(props) {

  const { children, titleWeb, credentials } = props;

  return (
    <Fragment>
      <header className="header">
        <div className="header container-fluid">
          <div className="header row">
            <div className="header col-md-12">
              <div className="headerTitle">
                <h1><Link className="title decorationItem" to={'/'} >{titleWeb}</Link></h1>
                <TopNav credentials={credentials}/>
              </div>
              <div className="headerImage">
                <img
                  src={ocio}
                  className="ocio_asturias"
                  alt="Imagen Representativa del Ocio en Asturias"
                />
              </div>
              <div>
                <BottomNav />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="userProfile container-fluid">
        <div className="userProfile row">
          <div className="userProfile col-md-12"><h3 className="changeText">Bienvenid@ {credentials.alias} {credentials.profilePicture}</h3></div>
        </div>
        <div className="profile row">
          <Nav defaultActiveKey="/userProfile" className="userProfile flex-column col-md-4">
            <Link className="profile decorationItem nav-link" to={'/userProfile'}>Mi Cuenta</Link>
            <Link className="profile decorationItem nav-link" to={'/myInformationUpdate'}>Mis Datos Personales</Link>
            <Link className="profile decorationItem nav-link" to={'/myComments'}>Mis Comentarios</Link>
          </Nav>
          <div className="userProfile col-md-8">{children}</div>
        </div>
      </div>
    </Fragment>

  );
}

export default UserProfileLayout;