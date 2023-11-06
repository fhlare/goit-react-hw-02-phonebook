import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
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
    console.log(newContact)
    if (this.state.contacts.name.includes(newContact.name)) {
      alert(`${newContact.name} is alredy contact`)
    }
    
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts,{
          ...newContact,
          id: nanoid()
        }]
      }
    })
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
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onUpdateFilter={this.updateFilter} />
        {contacts.length > 0 && (
          <ContactList items={visibleContacts} deleteContact={this.deleteContact} />
        )}
        <GlobalStyle />
      </div>
    );
  }
}
