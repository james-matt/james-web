import React from 'react'
import Social from '../../components/Social/Social'
import Wave from '../../assets/images/wavey/wavey.png'
import './Home.css'

class Home extends React.Component {
    render () {
        return (
            <div className='home-container'>
                <div style={{display: 'flex', flex: '1'}}>
                    <img alt='placeholder-1' src={Wave} style={{ height: '100%', width: '100%' }}/>
                </div>
                <div className='home-title'>
                    <h1>I build websites, mobile apps, and cloud solutions.</h1>
                </div>
                <Social />
            </div>
        )
    }
}

export default Home