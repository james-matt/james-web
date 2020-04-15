import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import './Navbar.css'
import Logo1 from '../../assets/images/logo/LOGO/logo.png'


class Navbar extends React.Component {
    render () {
        return (
            <nav className="primary-bg padding-lg container">
                <ul className="container align-items-center">
                    <li><NavLink to='/home'><img src={Logo1} alt="logo" /></NavLink></li>
                    <li><NavLink to='/websites'>Websites</NavLink></li>
                    <li><NavLink to='/mobile'>Mobile</NavLink></li>
                    <li><NavLink to='/cloud'>Cloud</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar