import React from 'react';
import { Consumer } from '../Context';


class Task extends React.Component {
    state = {
        // showDetails: false
    }

    showDetails = () => {
        this.setState({ showDetails: !this.state.showDetails })
    }

    deleteTask = (id, dispatch) => {
        dispatch({
            type: "DELETE_TASK",
            payload: id
        })
    }
    render() {
        const { task, id } = this.props.task;
        // const { showDetails } = this.state
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className='task'>
                            <p className='task-item'>{task}</p>
                            <img 
                                src={require("../../src/img/dalete.png")}
                                className='delete'
                                onClick={this.deleteTask.bind(this, id, dispatch)} alt="" />

                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Task;

