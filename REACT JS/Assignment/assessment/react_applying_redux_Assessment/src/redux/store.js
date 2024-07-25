import { createStore } from 'redux';
import accordionReducer from './reducers';

const store = createStore(accordionReducer);

export default store;
