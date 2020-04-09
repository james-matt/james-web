import React from 'react'
import Header from '../../components/Header/Header'
import Icons from '../../components/Icons/Icons'
import Projects from '../../components/Projects/Projects'
import Project from '../../components/Project/Project'
import Wave from '../../assets/images/wavey/wavey.png'

class Cloud extends React.Component {
    render () {
        return (
            <div>
                <Header heading="Cloud" image={Wave} />
                <Projects>
                    <Project image="http://via.placeholder.com/500x300" heading="Kickstart Kids" description="Website with multiple environments, web servers, and storage." />
                    <Project image="http://via.placeholder.com/500x300" heading="Sponge" description="App with multiple databases and pub &frasl; sub chat functionality." />
                </Projects>
                <Icons>
                    <p>AWS</p>
                    <p>Heroku</p>
                    <p>PubNub</p>
                </Icons>
            </div>
        )
    }
}

export default Cloud