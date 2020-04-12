import React from 'react'
import Social from '../../components/Social/Social'
import Wave from '../../assets/images/wavey/wavey_1.svg'
import './Home.css'

class Home extends React.Component {
    render () {
        return (
            <div className="container-wrap">
                <section>
                    <img alt='placeholder-1' src={Wave} style={{ width: '100%' }}/>
                </section>
                <section className="padding-lg center secondary-bg">
                    <h1>I build websites, mobile apps, and cloud solutions.</h1>
                </section>
                <Social />
            </div>
        )
    }
}

export default Home