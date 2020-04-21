import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './screens/Home/Home'
import NoMatch from './screens/NoMatch/NoMatch'
import Websites from './screens/Websites/Websites'
import Mobile from './screens/Mobile/Mobile'
import Cloud from './screens/Cloud/Cloud'
import Contact from './screens/Contact/Contact'

class Routes extends React.Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/websites" component={Websites} />  
                <Route exact path="/mobile" component={Mobile} /> 
                <Route exact path="/cloud" component={Cloud} />
                <Route exact path="/contact" component={Contact} />             
                <Route component={NoMatch} />
            </Switch>
        )
    }
}

export default Routes