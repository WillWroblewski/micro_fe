import React, { Component } from 'react';

class ListContact extends Component {        
    constructor(props){
        super(props)
        this.state = {
            contacts: [
                {name: 'Willian'},
                {name: 'Denis'},
                {name: 'Saramento'},
                {name: 'Romeu'},
                {name: 'Eduardo'},
            ],
            contact: ''
        }

        this.editContact = this.editContact.bind(this);
        this.saveContact = this.saveContact.bind(this);
    }

    editContact(value) {
        this.setState({ contact: value });
    }

    saveContact() {
        let newContacts = Object.assign([], this.state.contacts);
        newContacts.push({name: this.state.contact})
        this.setState({ contacts: newContacts });
    }

    render(){                
        return (
            <div className="container-fluid">
                <div className="row s12">
                    <div className="col">
                        <ContactMenu editContact={this.editContact} saveContact={this.saveContact} />
                        <table className="table table-striped table-sm table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">NOME</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.contacts.map((c, i) =>
                                        <tr key={i}>
                                            <td>{i}</td>
                                            <td>{c.name}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>            
            </div>            
        )
    }    
}

const ContactMenu = ({contact, editContact, saveContact}) => (
    <div className="row pt-2 pb-2">
        <div className="col s12">
            <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Nome do contato" 
                    value={contact} 
                    onChange={ (e) => editContact(e.target.value) }
                />
            </div>            
            <button 
                type="button" 
                className="btn btn-primary btn-sm" 
                onClick={() => saveContact()}
            >                
                Inserir                
            </button>            
        </div>
    </div>
)

export default ListContact