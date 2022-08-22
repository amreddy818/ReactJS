import React from 'react'

function ContactList(props){
    const Contacts = props.Contacts.map((contact) => {
        return (
            <div>
                <h4>{contact.name}</h4>
                <h6>{contact.email}</h6>
            </div>
        );
    });
    return (
        <div>
            <h3>Contacts</h3>
            {Contacts}
        </div>
    );
}
export default ContactList;