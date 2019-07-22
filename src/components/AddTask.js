import React from 'react';
import { Consumer } from '../Context';
import uuid from 'uuid'

class AddTask extends React.Component {

	state = {
		task: '',
		id: ''
	}

	addtask = (dispatch, e) => {
		e.preventDefault();
		const { task } = this.state;

		const newTask = {
			task,
			id: uuid()
		}
		console.log(newTask)
		dispatch({
			type: "ADD_TASK",
			payload: newTask
		})

		this.setState({
			task: ""
		})
	}
	onChange = (e) => {
		this.setState({ task: e.target.value })
	}

	render() {
		const { task } = this.state;
		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return (
						<form className="addTask" onSubmit={this.addtask.bind(this, dispatch)}>
							<div className="addTaskInput">
								<label htmlFor="task">Add task</label>
								<input
									type="text"
									name="task"
									placeholder="Enter your task"
									value={ task }
									onChange={this.onChange}
									required />
							</div>
							<button>Add Task</button>
						</form>
					)
				}}
			</Consumer>
		)
	}
}

export default AddTask;