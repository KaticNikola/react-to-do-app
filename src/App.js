import React from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

import { Provider } from './Context';

import "./app.css";


function App() {
  return (
    <Provider>
      <div className="container" >
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
