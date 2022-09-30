import React, { Component } from "react";
import css from './ListOfContact.module.css';

class ListOfContact extends Component {
constructor(){
    super();
    this.state = {
        contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
        name: '',
        number: ''
}
}
render()
{
    return(
 <ul>{this.state.contacts.map(item => <li className={css.contactItem} key={item.id}>{item.name}:   {item.number}</li>)}</ul>
)}}

export default ListOfContact