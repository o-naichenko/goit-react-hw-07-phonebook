import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import s from './ContactForm.module.css';
import contactsActions from '../../redux/contacts/contacts-actions';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const clearState = () => {
    setName('');
    setNumber('');
  };

  const onChangeHandler = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const onSubmitHandler = e => {
    e.preventDefault();
    const { name, number } = e.currentTarget;
    if (name.value.length === 0) {
      alert('Please, fill name');
    } else if (number.value.length === 0) {
      alert('Please, fill phone number');
    } else {
      const newContact = {
        name: name.value,
        number: number.value,
        id: uuidv4(),
      };
      dispatch(contactsActions.addContact(newContact));
      clearState();
    }
  };
  return (
    <form className={s.Form} onSubmit={onSubmitHandler}>
      <label className={s.label}>
        <span>Name:</span>
        <input
          className={s.input}
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChangeHandler}
        ></input>
      </label>
      <label className={s.label}>
        <span>Number:</span>
        <input
          className={s.input}
          type="tel"
          placeholder="Phone number"
          name="number"
          value={number}
          onChange={onChangeHandler}
        ></input>
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
