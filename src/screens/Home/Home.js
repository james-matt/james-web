import React from 'react'
import PagePreviews from '../../components/PagePreviews/PagePreviews'
import PagePreview from '../../components/PagePreview/PagePreview'
import Header from '../../components/Header/Header'
import Wave from '../../assets/images/wavey/wavey_1.svg'
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
                    <PagePreview title="Websites" description="View website collaborations." />
                    <PagePreview title="Mobile" description="View app contributions." />
                    <PagePreview title="Cloud" description="View architected cloud solutions." />
                </PagePreviews>
            </div>
        )
    }
}

export default Home