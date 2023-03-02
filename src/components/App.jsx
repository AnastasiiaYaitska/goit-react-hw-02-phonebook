import { GlobalStyle } from "./GlobalStyle";
import { nanoid } from "nanoid";
import { Layout } from "./Layout/Layout";
import { ContactsForm } from "./ContactForm/ContactForm";
import { Contacts } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Component } from "react";
import contacts from "./contacts";


export class App extends Component{
  state = {
  contacts: [],
  filter:''
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts !== null) {
      const unparsedSaveContacts = JSON.parse(savedContacts);
      this.setState({contacts:unparsedSaveContacts })
      return;
    }
    this.setState({contacts})
  };

  componentDidUpdate(nextProps, nextState) { 
    if (nextState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  };
  

  handlerFormSubmit = (name, number) => {
 
    if (this.checkNameDuplicate(name)) {
      return alert( `${name} is already in the contacts ` )
    };
    
    const contact = {
      id: nanoid(),
      name,
      number
    };

    this.setState(prevState=>({ contacts: [contact, ...prevState.contacts] }));
  };
  


  checkNameDuplicate = (name) => {
   
    return  this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
   
   };
  
  
  
  handlerFilter = (event) => {
    this.setState({filter: event.target.value})
  };
  

  
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(({name})=>name.toLowerCase().includes(filter.toLowerCase()))
  };
  


  handlerContactDelete = (contactId) => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(contact => contact.id !== contactId) }
    })
   };
  
  
  
  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={this.handlerFormSubmit} />
        
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handlerFilter} />
        <Contacts Contacts={filteredContacts}
          deleteContact={this.handlerContactDelete } />
      <GlobalStyle/>
    </Layout>
    )
  }
};
