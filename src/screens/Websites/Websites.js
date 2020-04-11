import React from 'react'
import Header from '../../components/Header/Header'
import Icons from '../../components/Icons/Icons'
import Projects from '../../components/Projects/Projects'
import Project from '../../components/Project/Project'
import Wave from '../../assets/images/wavey/wavey.png'
import './Websites.css'


class Websites extends React.Component {
    render () {
        return (
            <div className="container-wrap">
                <section>
                    <Header heading='Websites' image={Wave} />
                </section>
                <section>
                    <Projects>
                        <Project image="http://via.placeholder.com/500x300" heading="Patient Care" description="Helps patients find doctors that can treat their conditions." />
                        <Project image="http://via.placeholder.com/500x300" heading="Kickstart Kids" description="Marketing website for a orgainization that teaches kids karate." />
                    </Projects> 
                </section>
                <section>
                    <Icons>
                        <p>Python</p>
                        <p>Django</p>
                        <p>Wagtail</p>
                        <p>JavaScript</p>
                        <p>React</p>
                    </Icons>
                </section>
              
            </div>
        )
    }
}

export default Websites