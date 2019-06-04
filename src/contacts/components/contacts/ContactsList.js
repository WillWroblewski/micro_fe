import React from 'react'

const contacts = [
    {id: 1, name: 'Contato 01'},
    {id: 2, name: 'Contato 02'},
    {id: 3, name: 'Contato 03'},
    {id: 4, name: 'Contato 04'},
    {id: 5, name: 'Contato 05'},
]

const ContactsList = () => {
    return(
        <div>
            {
                contacts.map((c, index) => 
                    <p key={index}>{`${c.id} - ${c.name}`}</p>
                )   
            }
        </div>
    )
}

export default ContactsList