import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.jsx';
import { Form, FormControl, Button } from 'react-bootstrap';

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
                        // PROPS CONTAINS DATA ACROSS APPLICATION, ADDING SOMETHING TO PROPS:
                        deadline={this.state.deadline} // with this line we passing information to Clock Component
                        mojNumer={5}
                    />
                </div>
                <Form inline>
                    <FormControl 
                        className="Deadline-input"
                        placeholder="new date" 
                        onChange={event => this.setState({newDeadline: event.target.value})}
                    />
                    <Button onClick={()=>this.ChangeDeadline()}>Submit</Button>
                </Form>
            </div>
        ); // end of return
    }; //end of render
}

export default App;
