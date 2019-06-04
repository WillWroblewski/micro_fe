import React from 'react';
import ListContact from './contacts/ListContact.jsx';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import NewContact from './contacts/NewContact';
import EditContact from './contacts/EditContact';

const App = () => {
    return(        
        <Router>            
            <Route exact path="/contacts" component={ListContact} />
            <Route path="/#/contacts/new" component={NewContact} />
            <Route path="/#/contacts/edit" component={EditContact} />            
        </Router>
    )
}

export default App