import React from 'react'
import Header from '../../components/Header/Header'
import Heading from '../../components/Heading/Heading'
import Projects from '../../components/Projects/Projects'
import Project from '../../components/Project/Project'
import Wave from '../../assets/images/wavey/wavey_4.svg'
import Sponge from '../../assets/images/mobile/sponge/sponge.png'
import Kickstart from '../../assets/images/websites/kickstart/kickstart.png'

class Cloud extends React.Component {
    render () {
        return (
            <div className="container-wrap">
                <Header heading="Cloud" image={Wave} />
                <Heading heading="Cloud solutions that are reliable, flexible, and scale." />
                <Projects>
                    <Project link="https://www.kickstartkids.org/" image={Kickstart} heading="Kickstart Kids" description="Cloud based website that markets the organization." />
                    <Project released={false} image={Sponge} heading="Sponge" description="Social media app that has a cloud based backend." />
                </Projects>
            </div>
        )
    }
}

export default Cloud