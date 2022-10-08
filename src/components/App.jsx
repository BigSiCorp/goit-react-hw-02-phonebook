import { Component } from 'react';
import { Form } from './Form/Form';
import { Section } from './Section/Section';
import { PhoneList } from './PhoneList/PhoneList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = newContact => {
    const newContactEntity = {
      id: nanoid(),
      ...newContact,
    };

    this.setState(state => ({
           contacts: [...state.contacts, newContactEntity],
    }))
    
    // this.checkNewContactPresence(newContactEntity.name)
    //   ? alert(`${newContactEntity.name} is already in contacts!`)
    //   : this.setState(state => ({
    //       contacts: [...state.contacts, newContactEntity],
    //     }));
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Form addContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          <PhoneList contacts={this.state.contacts} />
        </Section>
      </>
    );
  }
}
