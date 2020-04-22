import React from 'react'
import Header from '../../components/Header/Header'
import Wave from '../../assets/images/wavey/wavey_6.svg'
import './NoMatch.css'

class NoMatch extends React.Component {
    render () {
        return (
            <div className="container-wrap">
                <Header heading="Error 404" image={Wave} />
            </div>
        )
    }
}

export default NoMatch