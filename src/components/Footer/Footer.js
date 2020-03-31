import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

class Footer extends React.Component {
    render () {
        return (
            <div className="footer">
                <div className="social">
                    <a href='https://www.linkedin.com/in/james-taggart/'><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href='https://github.com/james-matt'><FontAwesomeIcon icon={faGithubSquare}/></a>
                    <a href='mailto:james.taggart.43@gmail.com'><FontAwesomeIcon icon={faEnvelopeSquare}/></a>
                </div>
            </div>
        )
    }
}

export default Footer