import React, { Component } from 'react'; //to be able to write jsx
import ReactDOM from 'react-dom'; //to render

import '../assets/stylesheets/application.scss';

// const Hello = props => <div>Hello, {props.name}</div>;
// SAME AS
// const Hello = (props) => {
//   return <div> Hello, {props.name} </div>
// }

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: true,
      counter: 0
    };
  }

  handleClick = () => { //with the arrow function this is bound to the instance
    //change state on click
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    });
  }

  render() {
 // build and return html
    return(
      <div className={this.state.clicked ? 'clicked' : ''} onClick={this.handleClick}>Hello {this.props.name} {this.state.counter}</div>
    )
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="Raphael" />, root);
}
