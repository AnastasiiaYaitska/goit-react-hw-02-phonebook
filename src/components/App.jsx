import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import { Layout } from './Layout/Layout';
import { ContactsForm } from './ContactForm/ContactForm';
import { Contacts } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect, useState } from 'react';
import contactsDefault from './contacts';

const getInitialContactList = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    const parsedSaveContacts = JSON.parse(savedContacts);
    return parsedSaveContacts;
  }
  return contactsDefault;
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContactList());
  const [filter, setFiler] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    if (checkNameDuplicate(name)) {
      return alert(`${name} is already in the contacts `);
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prevState => {
      return [contact, ...prevState];
    });
  };

  const checkNameDuplicate = name => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const addFilter = e => {
    setFiler(e.target.value);
  };

  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = contactId => {
    const updateContacts = contacts.filter(contact => contact.id !== contactId);
    setContacts(updateContacts);
  };

  const filteredContacts = filterContacts();
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactsForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={addFilter} />
      <Contacts Contacts={filteredContacts} deleteContact={deleteContact} />
      <GlobalStyle />
    </Layout>
  );
};
