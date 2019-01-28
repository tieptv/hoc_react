

import React from 'react';
import JobForm from './JobForm';
import { connect } from 'react-redux';
import {editJob} from '../actions/job_action'
const EditJob = (props) => (
    <div className='container__box'>
        <JobForm
            job={props.job}
            onSubmitJob={(job) => {
                props.dispatch(editJob(props.job.id,job));
                props.history.push('/');
            }}
        />
    </div>
);

const mapStateToProps = (state, props) => {
    let job={
        id:0,
        name:'',
        status:''
    }
   // eslint-disable-next-line no-unused-vars
   let paramID =props.match.params.id;
    state.forEach(element => {
        if( parseInt(element.id) === parseInt(paramID))
       {
           job.id=element.id;
           job.name=element.name;
           job.status=element.status;
       }
       
    });
    return {job:job};
    // return {
    //     job: state.find((job) =>
    //         job.id === props.match.params.id)
    // };

};

export default connect(mapStateToProps)(EditJob);
