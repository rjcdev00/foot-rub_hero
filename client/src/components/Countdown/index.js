import React from 'react';
import ReactSvgTimer from 'react-svg-timer';

const Countdown = (props) => {

    this.state = {
        resetRequested: false,
        timerIsComplete: false,
          logMilliseconds: true,
      };
       
      onComplete(status); {
        this.setState({
          timerIsComplete: status
        });
      }
       
      onReset() {
        this.setState({
          resetRequested: false
        });
      }
       
      timerValue(value) {
        this.timer = value;
        if (this.state.logMilliseconds) {
          console.log(value);
        }
      }
       
      onResetRequest() {
        this.setState({
          resetRequested: true
        });
        this.timer = 0;
      }
       
    
        return (
       
          <ReactSvgTimer
            timerCount={6}
            countdownColor="#00ffa8"
            innerColor="#fff"
            outerColor="#000"
            resetTimer={this.onReset}
            completeTimer={this.onComplete}
            resetTimerRequested={this.state.resetRequested}
            timerDuration={this.timerValue}
            displayCountdown={this.state.displayCountdown}
          />
       
        );
 }
       
    

    export default Countdown;

