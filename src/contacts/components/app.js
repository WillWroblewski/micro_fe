import React from 'react';
import ListContact from './contacts/ListContact';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

const App = () => (
    <Router>
        <Route render={({ location }) => (
            <div>
                <Route exact path="/contacts" render={() => <Redirect to="/contacts/list" />} />
                <Switch location={location}>
                    <Route exact path="/contacts/list" component={ListContact} />                    
                </Switch>
            </div>
        )} />
    </Router>        
)    


export default App;