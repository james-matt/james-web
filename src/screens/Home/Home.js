import React from 'react'
import Flicking from '@egjs/react-flicking';
import Social from '../../components/Social/Social'
import './Home.css'

class Home extends React.Component {
    render () {
        return (
            <div className='home-container'>
                <Flicking>
                    <img alt='placeholder-1' src='http://via.placeholder.com/2000x600' />
                    <img alt='placeholder-2' src='http://via.placeholder.com/2000x600' />
                    <img alt='placeholder-3' src='http://via.placeholder.com/2000x600' />
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