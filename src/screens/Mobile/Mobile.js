import React from 'react'
import Header from '../../components/Header/Header'
import Icons from '../../components/Icons/Icons'
import Projects from '../../components/Projects/Projects'
import Project from '../../components/Project/Project'
import Wave from '../../assets/images/wavey/wavey.png'


class Mobile extends React.Component {
    render () {
        return (
            <div>
                <Header heading="Mobile" image={Wave} />
                <Projects>
                    <Project image="http://via.placeholder.com/500x300" heading="Sponge" description="Social media app to be release on iOS and Android." />
                    <Project image="http://via.placeholder.com/500x300" heading="myForte" description="Skin care app for Epiduo Forte on iOS and Android." />
                </Projects>
                <Icons>
                    <p>JavaScript</p>
                    <p>React Native</p>
                    <p>Python</p>
                    <p>Django Rest Framework</p>
                </Icons>
            </div>
        )
    }
}

export default Mobile