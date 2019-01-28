
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import JobList from '../components/JobList';
import EditJob from '../components/EditJob';
import AddJob from '../components/AddJob';
const AppRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Switch>
                <Route path="/" component={JobList} exact={true} />
                <Route path="/job/insert" component={AddJob} />
                <Route path="/listJob" component={JobList}/>
                <Route path="/job/:id" component={EditJob} />
                {/* <Route path="/add" component={AddBook} /> */}
            </Switch>
        </div>
    </BrowserRouter>
);
 
export default AppRouter;