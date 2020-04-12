import React from 'react'
import './Icons.css'

class Icons extends React.Component {
    render () {
        return (
            <div className="secondary-bg padding-lg container-wrap space-evenly">
                {this.props.children}
            </div>
        )
    }
}

export default Icons