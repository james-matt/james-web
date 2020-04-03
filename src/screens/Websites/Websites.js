import React from 'react'
import Header from '../../components/Header/Header'
import Icons from '../../components/Icons/Icons'
import Projects from '../../components/Projects/Projects'
import Project from '../../components/Project/Project'
import './Websites.css'

class Websites extends React.Component {
    render () {
        return (
            <div>
                <Header heading='Websites' image="http://via.placeholder.com/2000x600" />
                <Projects>
                    <Project image="http://via.placeholder.com/500x300" heading="Patient Care" description="Helps patients find doctors that can treat their conditions." />
                    <Project image="http://via.placeholder.com/500x300" heading="Kickstart Kids" description="Marketing website for a orgainization that teaches kids karate." />
                </Projects>
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