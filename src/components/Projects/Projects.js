import React from 'react'
import './Projects.css'

class Projects extends React.Component {
    render () {
        return (
            <div className="ternary-bg container-wrap padding-lg">
                {this.props.children}
            </div>
        )
    }
}

export default Projects