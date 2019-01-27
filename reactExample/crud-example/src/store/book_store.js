import { createStore, applyMiddleware } from "redux";
import book_reducer from '../reducer/book_reducer';
import thunk from 'redux-thunk';
 
export default () => {
    return createStore(book_reducer, applyMiddleware(thunk));
};