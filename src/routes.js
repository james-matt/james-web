import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './screens/Home/Home'
import NoMatch from './screens/NoMatch/NoMatch'
import Clients from './screens/Clients/Clients'
import Projects from './screens/Projects/Projects'
import Services from './screens/Services/Services'
import About from './screens/About/About'
import Contact from './screens/Contact/Contact'

class Routes extends React.Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route exact path="/clients" component={Clients} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        )
    }
}

export default Routes