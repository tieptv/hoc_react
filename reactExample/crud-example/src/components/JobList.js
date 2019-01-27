
import React from 'react';
import { connect } from 'react-redux';
import Job from './job';
 
const JobList = (props) => (
    <div>
        Job List:
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
    return {
       jobs : state
    };
}
 
export default connect(mapStateToProps)(JobList);