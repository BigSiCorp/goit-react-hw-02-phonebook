import { Component } from 'react';
import { Form } from './Form/Form';
import { Section } from './Section/Section';
import { PhoneList } from './PhoneList/PhoneList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Form />
        </Section>
        <Section title="Contacts">
          <PhoneList contacts={this.state.contacts} />
        </Section>
      </>
    );
  }
}
