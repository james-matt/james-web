import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

class Footer extends React.Component {
    render () {
        return (
            <section>
                <footer class="padding-lg primary-bg container space-between align-items-center font-sm">
                    <Link to='/contact'>How do we get in contact?</Link>
                    <p>&copy; 2020 James Taggart</p>
                </footer>
            </section>
        )
    }
}

export default Footer