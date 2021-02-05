import { createAction } from '@reduxjs/toolkit';

const contactsActions = {
  addContact: createAction('contacts/add'),
  deleteContact: createAction('contacts/delete'),
  changeFilter: createAction('contacts/filter'),
  fetchContactsRequest: createAction('contacts/fetchContactsRequest'),
  fetchContactsSuccess: createAction('contacts/fetchContactsSuccess'),
  fetchContactsError: createAction('contacts/fetchContactsError'),
};

export default contactsActions;
