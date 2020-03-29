import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './Navbar.css'


class Navbar extends React.Component {
    render () {
        return (
            <div className="navbar-container">
                <nav>
                    <ul className="navbar-list">
                        <li><Link to='/home'>Home</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar