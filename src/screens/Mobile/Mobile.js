import React from 'react'
import Header from '../../components/Header/Header'
import Icons from '../../components/Icons/Icons'
import Projects from '../../components/Projects/Projects'
import Project from '../../components/Project/Project'
import Wave from '../../assets/images/wavey/wavey_3.svg'
import MyForte from '../../assets/images/mobile/myforte1.png'
import Sponge from '../../assets/images/mobile/sponge1.png'


class Mobile extends React.Component {
    render () {
        return (
            <div className="container-wrap">
                <Header heading="Mobile" image={Wave} />
                <Icons>
                    <p>JavaScript</p>
                    <p>React Native</p>
                </Icons>
                <Projects>
                    <Project image={Sponge} heading="Sponge" description="Social media app to be release on iOS and Android." />
                    <Project image={MyForte} heading="myForte" description="Skin care app for Epiduo Forte on iOS and Android." />
                </Projects>

            </div>
        )
    }
}

export default Mobile