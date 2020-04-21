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
                        description="Over the past five years, I’ve been fortunate enough to be a part of many outstanding software development teams with great people that provide consumer ready web applications to a wide variety of clients. Because of the outstanding performance of those teams and our ability to execute we have been able to deliver a wide range of different web applications to service our clients needs."
                        link='/websites' 
                    />
                    <PagePreview 
                        image={Mobile} 
                        title="Mobile" 
                        description="Recently our teams have been tasked with the mission to provide mobile apps that better service our clients needs. Our performance has allowed us to deliver consumer facing mobile apps for both iOS and Android at an incredible pace. Together as a team we have developed two mobile apps for iOS and Android this past year."
                        link='/mobile'
                    />
                    <PagePreview 
                        image={Cloud} 
                        title="Cloud" 
                        description="Currently all of the applications we build are cloud based. This allows us to provide cost effective, reliable, and fast solutions that scale while solving our clients needs. Utilizing cloud services our team has been able to deliver a large number of websites and mobile apps that our clients can count on." 
                        link='/cloud' 
                    />
                </PagePreviews>
            </div>
        )
    }
}

export default Home