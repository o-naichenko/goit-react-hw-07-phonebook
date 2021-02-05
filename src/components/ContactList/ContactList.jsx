import React from 'react';
import { useSelector } from 'react-redux';
import s from './ContactList.module.css';
import Contact from '../Contact';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
