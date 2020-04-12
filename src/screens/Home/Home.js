import React from 'react'
import Social from '../../components/Social/Social'
import Header from '../../components/Header/Header'
import Wave from '../../assets/images/wavey/wavey_1.svg'
import './Home.css'

class Home extends React.Component {
    render () {
        return (
            <div className="container-wrap">
                <Header heading="James Taggart" image={Wave} />
                <section className="padding-lg center secondary-bg">
                    <h2>I build websites, mobile apps, and cloud solutions.</h2>
                </section>
                <Social />
            </div>
        )
    }
}

export default Home