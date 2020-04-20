import React from 'react'
import Header from '../../components/Header/Header'
import Wave from '../../assets/images/wavey/wavey_5.svg'
import Heading from '../../components/Heading/Heading'
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
                            <h2>Thank you</h2>
                            <p class="padding-bottom-lg">Thanks for taking the time to look at my website. To get in contact with me use the contact information below or reach out to me on one of the platforms listed.</p>
                            <h2>Contact Information</h2>
                            <p class="padding-bottom-lg">Email: <a href="mailto:james.taggart.43@gmail.com">james.taggart.43@gmail.com</a></p>
                            <h2>Platforms</h2>
                            <p>Github: james-matt</p>
                            <p>linkedin: james.taggart.43</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact