import React from 'react'
import { Link } from 'react-router-dom'
import './PagePreview.css'

class PagePreview extends React.Component {
    render () {
        return (
            <div class="container-wrap center">
                <div className="container-wrap page-preview-container padding-bottom-lg">
                    <div className="container-wrap center page-preview-image-container">
                        <img alt="placeholder-1" src={this.props.image} style={{ maxHeight: 300, maxWidth: '100%' }} />
                    </div>
                    <div className="container-wrap center page-preview-text-container">
                        <div className="container-wrap cols">
                            <h2>{this.props.title}</h2>
                            <p className="padding-bottom-md">{this.props.description}</p>
                            <div>
                                <Link className="btn" to={this.props.link}>View {this.props.title}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default PagePreview