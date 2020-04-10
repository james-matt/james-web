import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import './Navbar.css'


class Navbar extends React.Component {
    render () {
        return (
            <section>
                <nav className="primary-bg padding-lg container">
                    <ul className="container">
                        <li><NavLink to='/home'>JT</NavLink></li>
                        <li className='nav-pages'><NavLink to='/websites'>Websites</NavLink></li>
                        <li><NavLink to='/mobile'>Mobile</NavLink></li>
                        <li><NavLink to='/cloud'>Cloud</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </nav>
            </section>
        )
    }
}

export default Navbar