
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Job from './job';
 
const JobList = (props) => (
    <div>
        <Link to={'job/insert'}>Insert Job</Link>
        <br></br>
        <div><h2>Job List:</h2></div>
        <ul>
            {props.jobs.map(job => {
                return (
                    <li key={job.id}>
                        <Job {...job} />
                    </li>
                );
            })}
        </ul>
 
    </div>
);
const mapStateToProps = (state) => {
    console.log(state);
    return {
       jobs : state
    };
}
 
export default connect(mapStateToProps)(JobList);