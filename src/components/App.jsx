import { GlobalStyle } from "./GlobalStyle";
import { nanoid } from "nanoid";
import { Layout } from "./Layout/Layout";
import { ContactsForm } from "./ContactForm/ContactForm";
import { Contacts } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Component } from "react";


export class App extends Component{
  state = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
  filter:''
  }



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
