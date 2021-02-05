import contactsActions from './contacts-actions';
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());
  try {
    const contacts = await server.get('http://localhost:3000/contacts');
    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error => console.log(error)));
  }
};
