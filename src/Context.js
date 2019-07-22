import React from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [action.payload, ...state.tasks]
            }
        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter( task => task.id !== action.payload)
            }

        default:
            return state;
    }

}


export class Provider extends React.Component {

    state = {
        tasks: [],
        dispatch: action => this.setState(state => reducer(state, action))
    }
       
    render() { 
        return ( 
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
         );
    }
}
export const Consumer = Context.Consumer;