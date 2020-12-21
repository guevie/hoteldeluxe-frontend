import React, { Component } from 'react'
// import logo from '../images/logo.svg'
import { AiOutlineBars } from 'react-icons/ai'
// import { FaAlignRight } from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle = () => {
        this.setState({isOpen:!this.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
              <div className="nav-center">
                  <div className="nav-header">
                    <Link to="">
                    {/* <img  src={logo} alt="Hotel de lux"/> */}
                    </Link>
                    <button type="button" className="nav-btn"
                    onClick={this.handleToggle}>
                        <AiOutlineBars className="nav-icon" />
                    </button>  
                  </div>
                  <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                      <li>
                          <Link to="/">Accueil</Link>
                      </li>
                      <li>
                          <Link to="/rooms">Chambres</Link>
                      </li>
                  </ul>
              </div>
            </nav>
        )
    }
}
