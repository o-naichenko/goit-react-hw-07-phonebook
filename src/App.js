import React from 'react';
// import PropTypes from "prop-types";
import s from './App.module.css';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
function App() {
  return (
    <div className={s.App}>
      <h1 className={s.header}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.header}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
