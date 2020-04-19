import React from 'react'
import './Project.css'

class Project extends React.Component {
    render () {
        return (
            <div className="container-wrap padding-bottom-md">
                <div className="container-wrap center">
                    <img alt="placeholder-1" src={this.props.image} style={{ maxHeight: 300, maxWidth: '100%' }} />
                </div>
                <div className="padding-bottom-sm">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.description}</p>
                </div>
                <div className="container-wrap padding-bottom-sm">
                    { this.props.released === undefined && <a className="btn" href={this.props.link} target="__blank">View {this.props.heading}</a>}
                    { this.props.released === false && <p>Not yet released.</p>}
                </div>
            </div>
        )
    }
}

export default Project