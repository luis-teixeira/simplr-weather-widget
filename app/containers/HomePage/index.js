import React, {Component} from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';

import {
  DEFAULT,
 } from '../App/constants';

import {
  defaultAction,
} from '../App/actions'


// // Be sure to include styles at some point, probably during your bootstrapping
// import 'react-select/dist/react-select.css';
// var options = [
//     { value: 'one', label: 'One' },
//     { value: 'two', label: 'Two' }
// ];
//
// function logChange(val) {
//   console.log("Selected: ", JSON.stringify(val));
//   console.log("Selected: ", val.l );
// }
//
// const getOptions = (input) => {
//   //http://autocomplete.wunderground.com/aq?query=
//
//   return fetch(`http://autocomplete.wunderground.com/aq?query=${input}`)
//     .then((response) => {
//       return response.json();
//     }).then((json) => {
//       return { options: json.RESULTS };
//     });
//
// };
// const filter = (val) => {
//   console.log('-',val);
// };
// constructor(props) {
//     super(props);
//     this.state = {value: 'xxx'};
//   }
//
// onChange = (value) => {
//
//     this.setState({
//       value: value.l,
//     });
//   }
//   gotoUser (value, event) {
//       console.log(value);
//     }

class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  onClickOnButton = () => {
    this.props.onDefaultAction();
  }

  render() {
    const { loading, message, messageDelay } = this.props;

    let messageContent = (<div><p>Click on button and this message will change, tru a action via saga</p></div>);
    if( message ) { messageContent = ( <div> <p dangerouslySetInnerHTML={{__html: message}}></p></div> ) }

    let messageDelayContent = (<div><p >This message will change to, in same way but with a 1000ms delay!</p></div>);
    if( messageDelay ) { messageDelayContent = ( <div> <p dangerouslySetInnerHTML={{__html: messageDelay}} ></p></div> ) }

    return (
      <section>
        <p><button onClick={this.onClickOnButton}> Click me </button></p>
        <div className={styles.warper}>
          {messageContent}
          {messageDelayContent}
        </div>
        {/* <Select.Async

            value={this.state.value}
            loadOptions={getOptions}
            onChange={this.onChange}
            labelKey="name"
            valueKey="l"
onValueClick={this.gotoUser} */}
        <p>
          To aget started, edit <code>src/HomePage/index.js</code> and save to reload.
        </p>
      </section>
    );
  }
}


// export default App;
const mapStateToProps = (state) => {
  return {
    loading: state.getIn(['app','loading']),
    message: state.getIn(['app','message']),
    messageDelay: state.getIn(['app','nested','city'])
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onDefaultAction: () => dispatch(defaultAction()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
