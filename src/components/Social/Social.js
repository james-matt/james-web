import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import './Social.css'

class Social extends React.Component {
    render () {
        return (
            <section className="container ternary-bg padding-lg space-evenly social">
                <a href='https://www.linkedin.com/in/james-taggart/'><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href='https://github.com/james-matt'><FontAwesomeIcon icon={faGithubSquare}/></a>
                <a href='mailto:james.taggart.43@gmail.com'><FontAwesomeIcon icon={faEnvelopeSquare}/></a>
            </section>
        )
    }
}

export default Social