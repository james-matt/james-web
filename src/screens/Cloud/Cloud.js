import React from 'react'
import Header from '../../components/Header/Header'
import Icons from '../../components/Icons/Icons'
import Projects from '../../components/Projects/Projects'
import Project from '../../components/Project/Project'
import Wave from '../../assets/images/wavey/wavey_4.svg'
import MyForte from '../../assets/images/mobile/myforte/myforte.png'
import Kickstart from '../../assets/images/websites/kickstart/kickstart.png'

class Cloud extends React.Component {
    render () {
        return (
            <div className="container-wrap">
                <Header heading="Cloud" image={Wave} />
                <Icons>
                    <p>AWS</p>
                    <p>Heroku</p>
                    <p>PubNub</p>
                </Icons>
                <Projects>
                    <Project image={Kickstart} heading="Kickstart Kids" description="Website with multiple environments, web servers, and storage." />
                    <Project image={MyForte} heading="Sponge" description="App with multiple databases and pub &frasl; sub chat functionality." />
                </Projects>
            </div>
        )
    }
}

export default Cloud