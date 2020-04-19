import React from 'react'
import { Link } from 'react-router-dom'
import './PagePreview.css'

class PagePreview extends React.Component {
    render () {
        return (
            <div className="container-wrap padding-bottom-lg">
                <div className="container-wrap center">
                    <img alt="placeholder-1" src={this.props.image} style={{ maxHeight: 300, maxWidth: '100%' }} />
                </div>
                <div>
                    <h2>{this.props.title}</h2>
                    <p className="padding-bottom-sm">{this.props.description}</p>
                </div>
                <div className="container-wrap padding-bottom-sm">
                    <Link className="btn" to={this.props.link}>View {this.props.title}</Link>
                </div>
            </div>
        )
    }
}

export default PagePreview