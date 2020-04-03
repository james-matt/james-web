import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import './Navbar.css'


class Navbar extends React.Component {
    render () {
        return (
            <div className='navbar-container'>
                <nav className='nav'>
                    <ul className='navbar-list'>
                        <li><NavLink to='/home'>JT</NavLink></li>
                        <li className='nav-pages'><NavLink to='/websites'>Websites</NavLink></li>
                        <li><NavLink to='/mobile'>Mobile</NavLink></li>
                        <li><NavLink to='/cloud'>Cloud</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar