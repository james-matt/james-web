import React from 'react'
import './Project.css'

class Project extends React.Component {
    render () {
        return (
            <div className="container-wrap">
                <div>
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.description}</p>
                </div>
                <div className="container-wrap">
                    <img alt="placeholder-1" src={this.props.image} style={{ width: '100%' }} />
                </div>
            </div>
        )
    }
}

export default Project