import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contacts-actions';

export const contactsReducer = createReducer([], {
  [contactsActions.addContact]: (state, { payload }) => [...state, payload],
  [contactsActions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
});

export const isLoadingReducer = createReducer(false, {
  [contactsActions.fetchContactsRequest]: true,
  [contactsActions.fetchContactsSuccess]: false,
  [contactsActions.fetchContactsError]: false,
});

export const filterReducer = createReducer('', {
  [contactsActions.changeFilter]: (state, { payload }) => payload,
});
