// const initialState = {
//   contacts: [
//     { id: 0, name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 1, name: 'Hermione Kline', number: '443-89-12' },
//     { id: 2, name: 'Eden Clements', number: '645-17-79' },
//     { id: 3, name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactList/list-slice';
import filterReducer from './filter/filter-slice';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
