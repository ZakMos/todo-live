// External deps
import React, {Component} from 'react';

/**
 * A react component to display the current time
 * @extends Component
 */
class Clock extends Component {
  constructor(props){
    super(props);

    this.state = {
      date: new Date()
    }
  }

  /**
   * A function to update the state with the current time
   */
  tick(){
    this.setState({
      date: new Date()
    });
  }

  // Lifecycle hooks
  /**
   * A method called once when a component is loaded into the DOM
   * Sets an interval on when to call tick
   */
  componentDidMount() {
    /**
     * The ID of our timer interval
     * @type {number}
     */
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  /**
   * A method called once before the component is removed from the DOM
   * Terminates our timerprocess saved in this.timerID
   */
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render(){
    const {date} = this.state;

    return (
      <p>It is now: {date.toLocaleTimeString('de')}</p>
    );
  }
}

export default Clock;
