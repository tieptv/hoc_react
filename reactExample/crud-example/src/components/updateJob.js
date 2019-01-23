import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: '', title: '', url: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
	fetch('http://localhost:8080/job/getById/' + this.props.match.params.id)
		.then(response => {
			return response.json();
		}).then(result => {
			console.log(result);
			this.setState({
				id:result.id,
				name:result.name,
				status:result.status
			});
		});
  }
  handleChange(event) {
	  const state = this.state
	  state[event.target.name] = event.target.value
	  this.setState(state);
  }
  handleSubmit(event) {
	  event.preventDefault();
	  fetch('http://localhost:8080/job/update/', {
			method: 'POST',
			body: JSON.stringify({
							id:this.state.id,
							name: this.state.title,
							status: this.state.url
			}),
			headers: {
							"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
				if(response.status === 200) {
					alert("Website update successfully.");
				}
			});
  }
  
  render() {
    return (
			<div id="container">
			  <Link to="/">Job</Link>
				  <p/>
				  <form onSubmit={this.handleSubmit}>
					<input type="hidden" name="id" value={this.state.id}/>
						<p>
						<label>Name:</label>
							<input type="text" name="title" value={this.state.name} onChange={this.handleChange} placeholder="Title" />
						</p>
						<p>
							<label>Status:</label>
							<input type="text" name="url" value={this.state.status} onChange={this.handleChange} placeholder="URL" />
						</p>
						<p>
							<input type="submit" value="Submit" />
						</p>
				  </form>
			   </div>
    );
  }
}

export default Update;