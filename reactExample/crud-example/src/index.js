           
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import getAppStore from './store/job_store';
import { getJobs } from './actions/job_action';
 
import { Provider } from 'react-redux';
 
const store = getAppStore();
 
const template = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
 
store.dispatch(getJobs()).then(() => {
    ReactDOM.render(template, document.getElementById('app'));
}) ;                                                                                                                                                                                                                                                                                                                                                