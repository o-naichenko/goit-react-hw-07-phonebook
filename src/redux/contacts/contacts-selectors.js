export const getFilterValue = state => state.filter;

export const getFilteredContacts = state => {
  if (state.filter.length === 0) {
    return state.contacts;
  } else {
    return state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(state.filter.toLowerCase()),
    );
  }
};
