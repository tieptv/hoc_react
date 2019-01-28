import React from 'react';
 
export default class JobForm extends React.Component {
    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.onStatusChange = this.onStatusChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        console.log(props);
       
        this.state = {
            id: props.job?props.job.id: '',
            name: props.job ? props.job.name : '',
            status: props.job ? props.job.status : '',
            error: ''
        };
        console.log(this.state);
    }
 
    onNameChange(e) {
        const name = e.target.value;
        this.setState(() => ({ name: name }));
    }
    onStatusChange(e) {
        const status = e.target.value;
        this.setState(() => ({ status: status }));
    }
    onSubmit(e) {
        e.preventDefault();
 
        if (!this.state.name || !this.state.status) {
            this.setState(() => ({ error: 'Please set name & status!' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmitJob(
                {   
                    id: this.state.id,
                    name: this.state.name,
                    status: this.state.status
                   
                }
            );
        }
    }
 
    render() {
        return (
            <div>
                {this.state.error && <p className='error'>{this.state.error}</p>}
                <form onSubmit={this.onSubmit} className='add-book-form'>
 
                    <input type="text" placeholder="name" autoFocus
                        value={this.state.name}
                        onChange={this.onNameChange} />
                    <br />
 
                    <input type="text" placeholder="status"
                        value={this.state.status}
                        onChange={this.onStatusChange} />
                    <br />

                    <button>Add Job</button>
                </form>
            </div>
        );
    }
}