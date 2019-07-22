import React from 'react';
import Task from './Task';
import { Consumer } from '../Context';

class TaskList extends React.Component {
    state = {}
    render() {
        return (
            <Consumer>
                {value => {
                    const { tasks } = value;
                    return (
                        <React.Fragment>
                            <div className="task-list">
                                <h2>
                                    List of Tasks
                                </h2>
                                {tasks.map(task => {
                                    return <Task task={task} key={task.id} />
                                })}
                            </div>
                        </React.Fragment>
                    )
                }}
            </Consumer>

        );
    }
}

export default TaskList;