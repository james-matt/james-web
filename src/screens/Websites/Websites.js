import React from 'react'
import Header from '../../components/Header/Header'
import Icons from '../../components/Icons/Icons'
import Projects from '../../components/Projects/Projects'
import Project from '../../components/Project/Project'
import Wave from '../../assets/images/wavey/wavey_2.svg'
import Kickstart1 from '../../assets/images/websites/kickstart/kickstart.png'
import PatientCare1 from '../../assets/images/websites/utsw/utsw.png'
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
                    <Project image={PatientCare1} heading="Patient Care" description="Helps patients find doctors that can treat their conditions." />
                    <Project image={Kickstart1} heading="Kickstart Kids" description="Marketing website for a orgainization that teaches kids karate." />
                </Projects> 

            </div>
        )
    }
}

export default Websites