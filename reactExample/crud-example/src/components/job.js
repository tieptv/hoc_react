import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeJob } from '../actions/job_action';
 
const Job = ({ id, name,status, dispatch }) => (
    <div>
        <h4>Name: {name}</h4>
        <p>Status: {status}</p>
        <Link to={`job/${id}`}>Edit</Link>
        <button onClick={() => {
            dispatch(removeJob({ id }));
        }}>Remove</button>
    </div>
);
 
export default connect()(Job);