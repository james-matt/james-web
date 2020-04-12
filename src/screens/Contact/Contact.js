import React from 'react'
import Header from '../../components/Header/Header'
import Social from '../../components/Social/Social'
import Wave from '../../assets/images/wavey/wavey_5.svg'
import './Contact.css'

class Contact extends React.Component {
    render () {
        return (
            <div className="container-wrap">
                <Header heading="Contact" image={Wave} />
                <section className="secondary-bg padding-lg center">
                    <div className="cols">
                        <h2>How do we get in contact?</h2>
                        <p>Email <a href="mailto:james.taggart.43@gmail.com">james.taggart.43@gmail.com</a> or reach out to me on one of the platforms below.</p>
                    </div>
                </section>
               <Social />
            </div>
        )
    }
}

export default Contact