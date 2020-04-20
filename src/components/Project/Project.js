import React from 'react'
import './Project.css'

class Project extends React.Component {
    render () {
        return (
            <div class="container-wrap center">
                <div className="container-wrap project-container padding-bottom-lg">
                    <div className="container-wrap center project-image-container">
                        <img alt="placeholder-1" src={this.props.image} style={{ maxHeight: 300, maxWidth: '100%' }} />
                    </div>
                    <div className="container-wrap center project-text-container">
                        <div className="container-wrap cols">
                            <h2>{this.props.heading}</h2>
                            <p className="padding-bottom-md">{this.props.description}</p>
                            <div className="container-wrap">
                                { this.props.released === undefined && <a className="btn" href={this.props.link} target="__blank">View {this.props.heading}</a>}
                                { this.props.released === false && <p className="italics">Not yet released.</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Project