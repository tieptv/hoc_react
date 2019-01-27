import { createStore, applyMiddleware } from "redux";
import job_reducer from '../reducer/job_reducer';
import thunk from 'redux-thunk';
 
export default () => {
    return createStore(job_reducer, applyMiddleware(thunk));
};