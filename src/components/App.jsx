import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
// import { nanoid } from 'nanoid';
//  import { idGenerator } from 'idgenerator-uuid-v4';

// import Filter from './Filter/Filter';
// import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection: 'column',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        {/* <Filter />
        <ContactList /> */}
      </div>
    );
  }
}
export default App;
