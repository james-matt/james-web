import React from 'react'

class Heading extends React.Component {
    render () {
        return (
            <div className="container secondary-bg padding-lg center">
                <h2>{this.props.heading}</h2>
            </div>
        )
    }
}

export default Heading