import React from 'react'
import './Project.css'

class Project extends React.Component {
    render () {
        return (
            <div className="project">
                <div className="project-image">
                    <img alt="placeholder-1" src={this.props.image} />
                </div>
                <div className="project-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default Project