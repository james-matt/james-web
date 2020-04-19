import React from 'react'
import Header from '../../components/Header/Header'
import Heading from '../../components/Heading/Heading'
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
                <Heading heading='Modern responsive websites that work on any device.' />
                <Projects>
                    <Project link="https://www.utswmed.org/" image={PatientCare1} heading="Patient Care" description="Helps patients find doctors that can treat their conditions." />
                    <Project link="https://www.kickstartkids.org/" image={Kickstart1} heading="Kickstart Kids" description="Marketing website for a orgainization that teaches kids karate." />
                </Projects> 

            </div>
        )
    }
}

export default Websites