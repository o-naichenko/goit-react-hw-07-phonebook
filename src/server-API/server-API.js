import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export async function fetchContacts() {
  const data = axios.get('/contacts').then(res => res.data);
  return data;
}

export async function postContact(contact) {
  const data = await axios.post('/contacts', contact).then(res => res.data);
  return data;
}

export async function deleteContact(contactId) {
  await axios.delete(`/contacts/${contactId}`);
}
