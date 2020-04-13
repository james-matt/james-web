import React from 'react'
import Header from '../../components/Header/Header'
import Icons from '../../components/Icons/Icons'
import Projects from '../../components/Projects/Projects'
import Project from '../../components/Project/Project'
import Wave from '../../assets/images/wavey/wavey_2.svg'
import Kickstart from '../../assets/images/websites/kickstartkids.png'
import PatientCare from '../../assets/images/websites/patientcare.png'
import './Websites.css'


class Websites extends React.Component {
    render () {
        return (
            <div className="container-wrap">
                <Header heading='Websites' image={Wave} />
                <Icons>
                    <p>Python</p>
                    <p>Django</p>
                    <p>Wagtail</p>
                    <p>JavaScript</p>
                    <p>React</p>
                </Icons>
                <Projects>
                    <Project image={PatientCare} heading="Patient Care" description="Helps patients find doctors that can treat their conditions." />
                    <Project image={Kickstart} heading="Kickstart Kids" description="Marketing website for a orgainization that teaches kids karate." />
                </Projects> 

            </div>
        )
    }
}

export default Websites