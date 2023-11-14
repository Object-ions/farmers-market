import React from 'react';
// import AvailableProduce from './AvailableProduce';
import MonthList from './MonthList';

class MonthControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // selectedMonth: null ?
      formVisibleOnPage: false
    };
  }

  // pass in   month into this parameter ?
  handleClick = () => {
    this.setState(prevState => ({
      // selectedMonth: month <--- parameter for handleClick
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList />
      buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}


export default TicketControl;