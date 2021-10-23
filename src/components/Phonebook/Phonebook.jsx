import React, { Component } from "react";
import Form from "../Form/Form";
import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";
import "./Phonebook.css";

class Phonebook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const localContacts = localStorage.getItem('contacts')
    const parseContacts = JSON.parse(localContacts)
    this.setState({ contacts: parseContacts })
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts',JSON.stringify(this.state.contacts))
    }
  }

  formSubmit = contact => {
    const { contacts } = this.state;
    this.setState({ contacts: [contact, ...contacts] });
  };

  changeFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const getFilter = filter.toLocaleLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(getFilter)
    );
  };

  deleteContacts = contactId => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== contactId),
    }));
  }

  render() {
    const {
      state,
      formSubmit,
      changeFilter,
      filterContacts,
      deleteContacts,
    } = this;
    const { contacts, filter } = state;
    return (
      <div className="section">
        <div>
          <h1 className="title">Phonebook</h1>
          <Form onSubmit={formSubmit} contacts={contacts} />
        </div>
        <div className="contacts">
          <h2 className="tittle">Contacts</h2>
          <div className="contactsList">
            <Filter value={filter} onChange={changeFilter} />
            <Contacts
              contacts={filterContacts()}
              deleteContacts={deleteContacts}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Phonebook;
