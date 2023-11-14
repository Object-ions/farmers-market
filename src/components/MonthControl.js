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

  // pass in   month into this parameter ?
  handleClick = (event) => {
    const month = event.target.textContent;

    this.setState({ 
      selectedMonth: month
    });
  }



  render(){
    // let currentlyVisibleState = null;

    // if (this.state.selectedMonth) {
    //   currentlyVisibleState = <NewTicketForm />
    // } else {
    //   currentlyVisibleState = <TicketList />
    // }

    return (
      <React.Fragment>
        {/* {currentlyVisibleState} */}
        {/* <button onClick={this.handleClick}>{buttonText}</button> */}
        <MonthList selectedMonth={this.state.selectedMonth} onClick={this.handleClick} />
      </React.Fragment>
    );
  }

}


export default MonthControl;