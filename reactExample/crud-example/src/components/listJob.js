import React from 'react';
import { Link } from 'react-router-dom';

class listJob extends React.Component {
	constructor(props) {
		super(props);
		this.state = {jobs: []};
		this.headers = [
			{ key: 'id', label: 'Id'},
			{ key: 'jobName', label: 'Job Name' },
			{ key: 'linkContent', label: 'Link Content' },
			{ key: 'status', label: 'Status' },
			{ key: 'show', label: 'Hiển thị' }
		];
		this.deleteJob = this.deleteJob.bind(this);
	}
	
	componentDidMount() {
		fetch('http://localhost:8080/api/list-job')
			.then(response => { 
				return response.json();
			}).then(result => {
				console.log(result);
				this.setState({
					roles:result
				});
			});
	}
	
	deleteJob(id) {
		if(window.confirm("Are you sure want to delete?")) {
			fetch('http://localhost:8080/api/delete-job/' + id)
				.then(response => { 
					if(response.status === 200) {
						alert("Website deleted successfully");
                                                fetch('http://localhost:8080/api/list-job')
						.then(response => {
							return response.json();
						}).then(result => {
							console.log(result);
							this.setState({
								roles:result
							});
						});
					} 
			 });
		}
	}
	
	render() {
		return (
			<div id="container">
				<Link to="/create">Add Job</Link>
				<p/>
				<table>
					<thead>
						<tr>
						{
							this.headers.map(function(h) {
								return (
									<th key = {h.key}>{h.label}</th>
								)
							})
						}
						  <th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{
							this.state.jobs.map(function(item, key) {
							return (
								<tr key = {key}>
								  <td>{item.id}</td>
								  <td>{item.jobName}</td>
								  <td>{item.linkContent}</td>
								  <td>{item.status}</td>
								  <td>{item.show}</td>
								  <td>
										<Link to={`/update/${item.id}`}>Edit</Link>
										 
										<a href="javascript:void(0);" onClick={this.deleteJob.bind(this, item.id)}>Delete</a>
								  </td>
								</tr>
											)
							}.bind(this))
						}
					</tbody>
				</table>
			</div>
		)
	}
}

export default listJob;