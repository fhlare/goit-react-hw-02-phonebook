import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';


export class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  };

  updateFilter = (contactName) => {
    this.setState({
      filter: contactName,
    });
  };

  deleteContact = (contactId) => {
    console.log(contactId);
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== contactId)
      }
    })
  };

  addContact = (newContact) => {
    const { contacts } = this.state;
    const sameContact = contacts.some(contact => contact.name === newContact.name);
    if (sameContact) {
      alert(`${newContact.name} is alredy contact`);
    }else{
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, {
          id: nanoid(),
          ...newContact,
        }]
      }
    })
  }
  };


  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(contact => {
      const hasContact = contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());
      
      return hasContact;
    });
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onUpdateFilter={this.updateFilter} />
        {contacts.length > 0 && (
          <ContactList items={visibleContacts} deleteContact={this.deleteContact} />
        )}
        <GlobalStyle />
      </Container>
    );
  }
}
