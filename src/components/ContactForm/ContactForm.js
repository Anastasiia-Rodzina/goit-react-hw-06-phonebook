import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './ContactForm.module.css';
import { addContact } from '../../redux/contactList/list-slice';
import { getFilteredContacts } from '../../redux/contactList/list-selectors';

const ContactForm = () => {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number
      )
    ) {
      alert(`${name} or ${number} is already in contacts.`);
      return state;
    }
    const action = addContact({ name, number });
    dispatch(action);
    setState({
      name: '',
      number: '',
    });
  };

  const { name, number } = state;

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.label}>
        <label>Name</label>
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={css.label}>
        <label>Number</label>
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </div>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
