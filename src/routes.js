import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './screens/Home/Home'
import NoMatch from './screens/NoMatch/NoMatch'

class Routes extends React.Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route component={NoMatch} />
                </Switch>
            </div>
        )
    }
}

export default Routes