import React from 'react'
import Header from '../../components/Header/Header'
import Icons from '../../components/Icons/Icons'
import Projects from '../../components/Projects/Projects'
import Project from '../../components/Project/Project'
import Wave from '../../assets/images/wavey/wavey_3.svg'


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
                    <Project image="http://via.placeholder.com/500x300" heading="Sponge" description="Social media app to be release on iOS and Android." />
                    <Project image="http://via.placeholder.com/500x300" heading="myForte" description="Skin care app for Epiduo Forte on iOS and Android." />
                </Projects>

            </div>
        )
    }
}

export default Mobile