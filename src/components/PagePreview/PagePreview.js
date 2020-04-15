import React from 'react'
import './PagePreview.css'

class PagePreview extends React.Component {
    render () {
        return (
            <div className="">
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default PagePreview