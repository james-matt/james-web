import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


class Navbar extends React.Component {
    render () {
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/clients'>Clients</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>

                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar