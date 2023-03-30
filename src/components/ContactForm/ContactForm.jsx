import { nanoid } from 'nanoid';
import { GrPhone, GrUserManager } from 'react-icons/gr';
import { useState } from 'react';
import { Form, Label, Input, SubmitBtn } from './ContactForm.styled';

export const ContactsForm = ({ onSubmit }) => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handlerSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    event.currentTarget.reset();
  };

  return (
    <Form onSubmit={handlerSubmit}>
      <Label htmlFor={nameInputId}>
        {' '}
        Name <GrUserManager />{' '}
      </Label>
      <Input
        type="text"
        name="name"
        id={nameInputId}
        // value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={e => setName(e.target.value)}
      />

      <Label htmlFor={numberInputId}>
        Number <GrPhone />
      </Label>

      <Input
        type="tel"
        name="number"
        id={numberInputId}
        // value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={e => setNumber(e.target.value)}
      />

      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </Form>
  );
};
