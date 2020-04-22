import React from 'react'
import Header from '../../components/Header/Header'
import Wave from '../../assets/images/wavey/wavey_5.svg'
import Heading from '../../components/Heading/Heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import './Contact.css'


class Contact extends React.Component {
    render () {
        return (
            <div className="container-wrap">
                <Header heading="Contact" image={Wave} />
                <Heading heading="Thanks for your consideration." />
                <section className="ternary-bg padding-lg">
                    <div className="container-wrap padding-bottom-md center">
                        <div className="container-wrap contact-text-container cols">
                            <h2>Information</h2>
                            <p className="padding-bottom-lg">To reach me directly use the contact information below or reach out to me on one of the platforms listed.</p>
                            <h2>Direct Contact</h2>
                            <p className="padding-bottom-lg"><a href="mailto:james.taggart.43@gmail.com">james.taggart.43@gmail.com</a></p>
                            <h2>Platforms</h2>
                            <div className="social">
                                <a className="padding-right" href='https://www.linkedin.com/in/james-taggart/'><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href='https://github.com/james-matt'><FontAwesomeIcon icon={faGithubSquare}/></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact