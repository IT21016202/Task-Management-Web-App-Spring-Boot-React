import React from 'react'
import { Link } from 'react-router-dom';
import Image from '../images/appicon.png';

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link to="/" style={{textDecoration: 'none'}}><a class="navbar-brand" href="#" style={styles.navTopic}>TaskEase</a></Link> 
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"></a>
            </li>
            <li class="nav-item">
              <Link to="/allTasks" style={{textDecoration: 'none'}}> <a className="nav-link" href="#" style={styles.navbtn}>My Tasks</a></Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={styles.navbtn}>My Profile</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
          </form>
        </div>
      </div>
    </nav>
  )
}

const styles = {
    navbtn: {
        color: 'darkgreen',
        fontSize: '20px',
        fontWeight: 'bold',
    },

    navTopic: {
        color: 'darkblue',
        fontSize: '30px',
        fontWeight: 'bold',
    }
}


export default NavBar