import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'April 21, 2018'
        }
    }
    
    changeDeadline() {
        this.setState({deadline: this.state.newDeadline});
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">
                    Countdown to {this.state.deadline}
                </div>
                <Clock />
                <input placeholder='new date'
                    onChange={event => this.setState({
                        newDeadline: event.target.value
                    })}
                />
                <button onClick={() => this.changeDeadline()}>
                    Submit
                </button>
            </div>
        )
    }
}

export default App;