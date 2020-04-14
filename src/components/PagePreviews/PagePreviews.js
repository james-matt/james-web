import React from 'react'

class PagePreviews extends React.Component {
    render () {
        return (
            <div className="container-wrap padding-lg">
                {this.props.children}
            </div>
        )
    }
}

export default PagePreviews