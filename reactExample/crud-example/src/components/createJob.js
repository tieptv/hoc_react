import React from 'react';
import { Link } from 'react-router-dom';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', url:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
	  const state = this.state
	  state[event.target.name] = event.target.value
	  this.setState(state);
  }
  handleSubmit(event) {
		event.preventDefault();
		// eslint-disable-next-line no-unused-vars
	  fetch('http://localhost:8080/job/insert', {
			method: 'POST',
		  body: JSON.stringify({
							name: this.state.name,
							status: this.state.status
			}),
			headers: {
							"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
				if(response.status === 200) {
					alert("Job saved successfully");
				}
			});
  }
  render() {
    return (
		<div id="container">
		  <Link to="/">Websites</Link>
			  <p/>
			  <form onSubmit={this.handleSubmit}>
				<p>
					<label>Name:</label>
					<input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
				</p>
				<p>
					<label>Status:</label>
					<input type="text" name="status" value={this.state.status} onChange={this.handleChange} placeholder="Status" />
				</p>
				<p>
					<input type="submit" value="Submit" />
				</p>
			  </form>
		   </div>
    );
  }
}

export default Create;