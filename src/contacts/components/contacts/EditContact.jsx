import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditContact extends Component {        
    render(){        
        return(
            <div>
                <Link to="/contacts/list">Voltar</Link>
                Editando
            </div>
        )
    }    
}

export default EditContact