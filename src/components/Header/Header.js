import React from 'react'
import './Header.css'

class Header extends React.Component {
    render () {
        const styles = {
            backgroundImage: `url(${this.props.image})`
        }
        return (
            <header style={styles}>
                <div className="text-container">
                    <h1>{this.props.heading}</h1>
                </div>
            </header>
        )
    }
}

export default Header