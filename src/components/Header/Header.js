import React from 'react'
import './Header.css'

class Header extends React.Component {
    render () {
        return (
            <header className="container-wrap relative center align-items-center padding-md">
                <img alt='placeholder' src={this.props.image} style={{ width: '100%' }} />
                <div className="text-container primary-bg padding-md border">
                    <h1>{this.props.heading}</h1>
                </div>
            </header>
        )
    }
}

export default Header