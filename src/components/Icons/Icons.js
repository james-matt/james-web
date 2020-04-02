import React from 'react'
import './Icons.css'

class Icons extends React.Component {
    render () {
        return (
            <div className="icons">
                {this.props.children}
            </div>
        )
    }
}

export default Icons