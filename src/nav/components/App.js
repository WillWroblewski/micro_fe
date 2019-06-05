import React, { Component } from 'react'

export default class App extends Component {
    render(){                        

        const navigateTo = url => window.history.pushState(null, null, url); 

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Micro-Frontends</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item app-link active">
                            <a style={{ cursor: 'pointer' }}
                                className="nav-link" 
                                onClick={() => navigateTo("/")}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a style={{ cursor: 'pointer' }}
                                className="nav-link" 
                                onClick={() => navigateTo("/contacts")}
                            >
                                Contatos
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )        
    }    
}