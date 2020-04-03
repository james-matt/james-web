import React from 'react'
import './Projects.css'

class Projects extends React.Component {
    render () {
        return (
            <div className="websites-container">
                {this.props.children}
            </div>
        )
    }
}

export default Projects