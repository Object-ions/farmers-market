import React from 'react';
// import AvailableProduce from './AvailableProduce';
import MonthList from './MonthList';

class MonthControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedMonth: null 
    };
  }

  handleClick = (event) => {
    const month = event.target.textContent;

    this.setState({ 
      selectedMonth: month
    });
  }

  render(){

    return (
      <React.Fragment>
        <MonthList selectedMonth={this.state.selectedMonth} onClick={this.handleClick} />
      </React.Fragment>
    );
  }

}

export default MonthControl;