import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import { useSelector, useDispatch } from "react-redux";

import { getFilteredContacts } from "../redux/contactList/list-selectors";
import { addContact, deleteContact } from "../redux/contactList/list-slice";
import { setFilter } from "../redux/filter/filter-slice";

export const App = () => {
   
 const contacts = useSelector(getFilteredContacts);

 const dispatch = useDispatch();

const onAddContact = ({ name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    }
const action = addContact({ name, number })
dispatch(action)
  };

  const onDeleteContact = id => {
   dispatch(deleteContact(id));
  };

  const changeFilter = ({target}) => {
   const action = setFilter( target.value );
   dispatch(action)
  };

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={onAddContact} />
        <h2>Contacts</h2>
       <Filter name="filter" onChange={changeFilter} />
      <ContactList
        contacts={contacts}
        onDeleteContact={onDeleteContact}
      />
      </>
    );
  }