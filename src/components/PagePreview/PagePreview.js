import React from 'react'
import './PagePreview.css'

class PagePreview extends React.Component {
    render () {
        return (
            <div className="container-wrap padding-bottom-md">
                <div className="container-wrap center">
                    <img alt="placeholder-1" src={this.props.image} style={{ maxHeight: 300, maxWidth: '100%' }} />
                </div>
                <div className="padding-bottom-sm">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default PagePreview