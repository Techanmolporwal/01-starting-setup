import React from 'react';
import propTypes from 'prop-types';
import BlueDarkMode  from './BlueDarkMode';
import GreyDarkMode from './GreyDarkMode';
// import { Link } from 'react-router-dom';
function NavBar(props){
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                {/* <Link className="nav-link" to="/">{props.About}</Link> */}
                </li>            
            </ul>
            {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>      */}
            {/* <div className={`form-check form-switch text-${props.mode==="light"?'dark':'light'}`}>
                <input onClick={props. toggleMode} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label  class="form-check-label" htmlfor="flexSwitchCheckDefault">Dark Mode</label>
            </div> */}
            <GreyDarkMode onClick={props.toggleMode} mode={props.mode}/>
            <BlueDarkMode onClick={props.toggleMode2} mode={props.mode}/>
    </div>
  </div>
</nav>
    )
}

NavBar.propTypes={
    title:propTypes.string.isRequired,
    About:propTypes.string.isRequired
}

NavBar.defaultProps={
    title:"Set Titile",
    About:"Set About"
}

export default NavBar