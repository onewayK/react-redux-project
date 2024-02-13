import { createStore } from 'redux';
import setFavorite from '../reducers';

const store = createStore(setFavorite);

export default store;