export const getContacts = store => store.contacts;

export const getFilteredContacts = store => {
  const { filter, contacts } = store;
  if (!filter) {
    return contacts;
  }

  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });
};
