import React from 'react'
import Header from '../../components/Header/Header'
import Icons from '../../components/Icons/Icons'
import Projects from '../../components/Projects/Projects'
import Project from '../../components/Project/Project'
import Wave from '../../assets/images/wavey/wavey_4.svg'

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
                    <Project image="http://via.placeholder.com/500x300" heading="Kickstart Kids" description="Website with multiple environments, web servers, and storage." />
                    <Project image="http://via.placeholder.com/500x300" heading="Sponge" description="App with multiple databases and pub &frasl; sub chat functionality." />
                </Projects>
            </div>
        )
    }
}

export default Cloud