

import React from 'react';
import JobForm from './JobForm';
import { connect } from 'react-redux';
import {addJob} from '../actions/job_action'
const AddJob = (props) => (
    <div className='container__box'>
    <h2>Insert</h2>
        <JobForm
            onSubmitJob={(job) => {
                console.log('đã vào');
                props.dispatch(addJob(job));
                props.history.push('/');
            }}
        />
    </div>
);
export default connect()(AddJob);
