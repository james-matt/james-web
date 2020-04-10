import React from 'react'
import Social from '../../components/Social/Social'
import Wave from '../../assets/images/wavey/wavey.png'
import './Home.css'

class Home extends React.Component {
    render () {
        return (
            <div>
                <section>
                    <img alt='placeholder-1' src={Wave} style={{ width: '100%' }}/>
                </section>
                <section className="secondary-bg padding-lg center">
                    <h1>I build websites, mobile apps, and cloud solutions.</h1>
                </section>
                <Social />
            </div>
        )
    }
}

export default Home