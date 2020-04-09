import React from 'react'
import Header from '../../components/Header/Header'
import Social from '../../components/Social/Social'
import Wave from '../../assets/images/wavey/wavey.png'
import './Contact.css'

class Contact extends React.Component {
    render () {
        return (
            <div>
                <Header heading="Contact" image={Wave} />
                <div className="contact-text-container">
                    <div>
                        <h2>But how do I contact you?</h2>
                        <p>Send me a email! My email is <a href="mailto:james.taggart.43@gmail.com">james.taggart.43@gmail.com</a> or reach out to me on one of the platforms below.</p>
                    </div>
                </div>
                <Social />
            </div>
        )
    }
}

export default Contact