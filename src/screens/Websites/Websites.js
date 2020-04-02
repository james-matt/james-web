import React from 'react'
import Header from '../../components/Header/Header'
import Icons from '../../components/Icons/Icons'
import './Websites.css'

class Websites extends React.Component {
    render () {
        return (
            <div>
                <Header heading='Websites' image="http://via.placeholder.com/2000x600" />
                <div className="websites-container">
                    <div className="project">
                        <div className="project-image">
                            <img alt="placeholder-1" src="http://via.placeholder.com/500x300" />
                        </div>
                        <div className="project-text">
                            <h2>Patient Care</h2>
                            <p>Helps patients find doctors that can treat their conditions.</p>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-image">
                            <img alt="placeholder-1" src="http://via.placeholder.com/500x300" />
                        </div>
                        <div className="project-text">
                            <h2>Kickstart Kids</h2>
                            <p>Marketing website for a orgainization that teaches kids karate.</p>
                        </div>
                    </div>
                </div>
                <Icons>
                    <p>Python</p>
                    <p>Django</p>
                    <p>Wagtail</p>
                    <p>JavaScript</p>
                    <p>React</p>
                </Icons>
            </div>
        )
    }
}

export default Websites