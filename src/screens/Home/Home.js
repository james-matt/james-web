import React from 'react'
import Flicking from '@egjs/react-flicking';
import Social from '../../components/Social/Social'
import WebImage from './web.png'
import MobileImage from './mobile.png'
import './Home.css'

class Home extends React.Component {
    render () {
        return (
            <div className='home-container'>
                <Flicking>
                    <div style={{ height: 600, width: 2000}}>
                        <img alt='placeholder-1' src={WebImage}/>
                    </div>
                    <div style={{ height: 600, width: 2000}}>
                        <img alt='placeholder-2' src={MobileImage}/>
                    </div>
                </Flicking>
                <div className='home-title'>
                    <h1>I build websites, mobile apps, and cloud solutions.</h1>
                </div>
                <Social />
            </div>
        )
    }
}

export default Home