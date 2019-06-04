import React, { Component } from 'react'
import ListContact from './contacts/ListContact'

class App extends Component {
    render() {
        return (
            <div className="container">
                <ListContact />
            </div>
        )
    }
}

export default App