import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.jsx';

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
                    < Clock 
                        // PROPS CONTAINS DATA ACROSS APPLICATION:
                        // ADDING SOMETHING TO PROPS:
                        deadline={this.state.deadline} // with this line we passing information to Clock Component
                        mojNumer={5}
                    />
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
