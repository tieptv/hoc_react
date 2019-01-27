import axios from '../axios/axios';
 
const _addJob = (job) => ({
    type: 'ADD_JOB',
    job
});
 
export const addJob = (jobData = {
    name: '',
    status: ''
   
}) => {
    return (dispatch) => {
        const job = {
            name: jobData.name,
            status: jobData.status,
           
        };
 
        return axios.post('job/insert', job).then(result => {
            dispatch(_addJob(result.data));
        });
    };
};
 
const _removeJob = ({ id } = {}) => ({
    type: 'REMOVE_JOB',
    id
});
 
export const removeJob = ({ id } = {}) => {
    console.log(id);
    return (dispatch) => {
        return axios.delete(`job/delete/${id}`).then(() => {
            dispatch(_removeJob({ id }));
        })
    }
};
 
const _editJob = (id, updates) => ({
    type: 'EDIT_JOB',
    id,
    updates
});
 
export const editJob = (id, updates) => {
    return (dispatch) => {
        return axios.post('job/update', updates).then(() => {
            dispatch(_editJob(id, updates));
        });
    }
};
 
const _getJobs = (jobs) => ({
    type: 'GET_JOBs',
    jobs
});
 
export const getJobs = () => {
    return (dispatch) => {
        return axios.get('job/list').then(result => {
            const jobs = [];
 
            result.data.forEach(item => {
                jobs.push(item);
            });
 
            dispatch(_getJobs(jobs));
        });
    };
};