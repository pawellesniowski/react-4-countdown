import React, { Component } from 'react';
import './App.css';

class App extends Component {

    // adding STATE, to our component:
    constructor (props) {
        super(props);
        this.state = { 
            deadline: 'December 25, 2017',
            newDeadline: ''
        }
        
        // this.ChangeDeadline = this.ChangeDeadline.bind(this);
    }

    ChangeDeadline(){
        this.setState({ deadline: this.state.newDeadline});
    }

    render (){
        return(
            <div className="App">
                <div className="title">
                    Countdown to { this.state.deadline }
                </div>
                <div>
                    <div className="Clock-days">14 days</div>
                    <div className="Clock-hours">3 hours</div>
                    <div className="Clock-minutes">15 miutes</div>
                    <div className="Clock-seconds">20 seconds</div>
                </div>
                <div>
                    <input 
                        placeholder="new date" 
                        onChange={event => this.setState({newDeadline: event.target.value})}
                    />
                    <button onClick={()=>this.ChangeDeadline()}>Submit</button>
                </div>
            </div>
        );
    }; //end of render
}

export default App;
