import React from 'react'
import PagePreviews from '../../components/PagePreviews/PagePreviews'
import PagePreview from '../../components/PagePreview/PagePreview'
import Header from '../../components/Header/Header'
import Wave from '../../assets/images/wavey/wavey_1.svg'
import Website from '../../assets/images/websites/utsw/utsw.png'
import Mobile from '../../assets/images/mobile/sponge/sponge.png'
import Cloud from '../../assets/images/websites/kickstart/kickstart.png'

import './Home.css'

class Home extends React.Component {
    render () {
        return (
            <div className="container-wrap">
                <Header heading="James Taggart" image={Wave} />
                <section className="padding-lg center secondary-bg">
                    <h2>I build websites, mobile apps, and cloud solutions.</h2>
                </section>
                <PagePreviews>
                    <PagePreview 
                        image={Website} 
                        title="Websites" 
                        description="Over the past five years, I’ve been fortunate enough to be a part of two great organizations that provide consumer ready web applications to a wide range of clients. Because of the outstanding performance of those teams and our ability to execute we have been able to deliver a wide variety of different web applications to service our clients needs."
                        link='/websites' 
                    />
                    <PagePreview 
                        image={Mobile} 
                        title="Mobile" 
                        description="In the past two years, under the guidance of a great team, I have been able to make a transition into mobile app development and we have been able to deliver a couple of different mobile apps for our clients."
                        link='/mobile'
                    />
                    <PagePreview 
                        image={Cloud} 
                        title="Cloud" 
                        description="With over three years of experience in this field. I have architected cloud solutions for a number of clients and personal projects. Allowing our clients to have fast, reliable, and scalable solutions for their websites and mobile apps." 
                        link='/cloud' 
                    />
                </PagePreviews>
            </div>
        )
    }
}

export default Home