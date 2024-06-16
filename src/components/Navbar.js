import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">{props.homeText}</Link> */}
                <a className="nav-link active" aria-current="page" href="#">{props.homeText}</a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
              </li>
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form> */}
            <div id="colorPicker">
              <input type="button" className='btn mx-1' onClick={props.changeTheme} color="#305AA2" style={{border:0,background:'#305AA2', width:'30px'}}/>
              <input type="button" className='btn mx-1' onClick={props.changeTheme} color="#DD0F20" style={{border:0,background:'#DD0F20', width:'30px'}}/>
              <input type="button" className='btn mx-1' onClick={props.changeTheme} color="#590FDD" style={{border:0,background:'#590FDD', width:'30px'}}/>
              <input type="button" className='btn mx-1' onClick={props.changeTheme} color="#0F3BDD" style={{border:0,background:'#0F3BDD', width:'30px'}}/>
              <input type="button" className='btn mx-1' onClick={props.changeTheme} color="#0D703F" style={{border:0,background:'#0D703F', width:'30px'}}/>
            </div>  
            <div className="form-check form-switch mx-3">
                <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`}  htmlFor="flexSwitchCheckDefault">Switch Mode</label>
                <input className="form-check-input" type="checkbox" onChange={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
            </div>
          </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = {
                title: PropTypes.string,
                aboutText: PropTypes.string,
                homeText: PropTypes.string.isRequired
            }

//  Navbar.defaultProps = {
//                 title: 'Set title here',
//                 aboutText: 'About Text'
//             }

