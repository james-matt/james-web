import React from 'react'
import Header from '../../components/Header/Header'
import Wave from '../../assets/images/wavey/wavey_5.svg'
import './Contact.css'
import Heading from '../../components/Heading/Heading'

class Contact extends React.Component {
    render () {
        return (
            <div className="container-wrap">
                <Header heading="Contact" image={Wave} />
                <Heading heading="Thank you."/>
                <section className="ternary-bg cols padding-lg">
                    <div className=" container-flex padding-bottom-md">
                        <h2>How do we get in contact?</h2>
                        <p>Email me! <a href="mailto:james.taggart.43@gmail.com">james.taggart.43@gmail.com</a> or reach out to me on one of the platforms in the links above.</p>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact