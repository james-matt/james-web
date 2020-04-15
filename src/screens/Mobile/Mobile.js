import React from 'react'
import Header from '../../components/Header/Header'
import Heading from '../../components/Heading/Heading'
import Projects from '../../components/Projects/Projects'
import Project from '../../components/Project/Project'
import Wave from '../../assets/images/wavey/wavey_3.svg'
import Sponge1 from '../../assets/images/mobile/sponge/sponge.png'
import MyForte1 from '../../assets/images/mobile/myforte/myforte.png'



class Mobile extends React.Component {
    render () {
        return (
            <div className="container-wrap">
                <Header heading="Mobile" image={Wave} />
                <Heading heading="Mobile apps for iOS and Android." />
                <Projects>
                    <Project image={Sponge1} heading="Sponge" description="Social media app to be release on iOS and Android." />
                    <Project image={MyForte1} heading="myForte" description="Skin care app for Epiduo Forte on iOS and Android." />
                </Projects>

            </div>
        )
    }
}

export default Mobile