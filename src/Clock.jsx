import React, { Component } from 'react';
import './App.css';

// CREATE Clock Component: 

class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
        console.log('this.props: ', this.props);
    }

    getTimeUntil(deadline){
        const time = (Date.parse(deadline) - Date.parse(new Date())/1000);

        // time to count     
        
        
    }


    render(){
        this.getTimeUntil(this.props.deadline);
        return(
            <div>
                <div className="Clock-days">{} days</div>
                <div className="Clock-hours">{this.state.hours} hours</div>
                <div className="Clock-minutes">{this.state.minutes} miutes</div>
                <div className="Clock-seconds">{this.getTimeUntil.seconds} seconds</div>
            </div>
        );

    }
}

export default Clock;
