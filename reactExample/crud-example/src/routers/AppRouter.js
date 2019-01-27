
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import JobList from '../components/JobList';
 
const AppRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Switch>
                <Route path="/" component={JobList}/>
                {/* <Route path="/add" component={AddBook} /> */}
            </Switch>
        </div>
    </BrowserRouter>
);
 
export default AppRouter;