import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            activeLink: 'home'
        }
    }

    render(){                        

        const navigateTo = url => window.history.pushState(null, null, url); 

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand text-white">Micro-Frontends</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className={this.state.activeLink === 'home' ? 'nav-item app-link active' : 'nav-item app-link'}>
                            <a style={{ cursor: 'pointer' }}
                                className="nav-link" 
                                onClick={() => {
                                    this.setState({activeLink: 'home'})
                                    navigateTo("/home")
                                }}
                            >
                                Home
                            </a>
                        </li>
                        <li className={this.state.activeLink === 'contacts' ? 'nav-item app-link active' : 'nav-item app-link'}>
                            <a style={{ cursor: 'pointer' }}
                                className="nav-link" 
                                onClick={() => {
                                    this.setState({activeLink: 'contacts'})
                                    navigateTo("/contacts")
                                }}
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