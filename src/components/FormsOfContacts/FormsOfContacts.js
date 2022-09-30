import React, {Component} from "react";

class FormsOfContacts extends Component {
    constructor() {
        super();
        this.state = {
        }
}
    render()
    {
        return(
            <input style={{
            type: 'text',
            name: 'name',
            pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
            title: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
            required: true,
            fontSize: 24,
            padding: 10,
            validate: true}}
          />  
        )}
}
export default FormsOfContacts