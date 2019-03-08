import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf, getSmurf } from '../actions';

import Loader from 'react-loader-spinner';

import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  state = {
    smurf: {
      name: '',
      age: '',
      height: ''
    }
  };

  componentDidMount = e => {
    this.props.getSmurf();
  }

  handleChange = e => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    });
  };

  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf);
    this.setState({
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>The Smurf Township</h1>
        {this.props.fetchingSmurfs && (
          <Loader type="Bars" color="lightblue" heigh="80" width="80" />
        )}
        <section>
          {this.props.smurfs.map((smurf, index) => {
            smurf.key = index;
            return (
            <div key={index}>
              <h2>Name: {smurf.name}</h2>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
            </div>
          )})}          
        </section>
        <div>
          <form onSubmit={this.addSmurf}>
            <input
              type="text"
              name="name"
              value={this.state.smurf.name}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="age"
              value={this.state.smurf.age}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="height"
              value={this.state.smurf.height}
              onChange={this.handleChange}
            />
            <button>Submit Smurf</button>
          </form>
          {this.props.error && (
            <h3>This Smurf Already Exists!</h3>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  error: state.error
})

export default connect(
  mapStateToProps, { addSmurf, getSmurf }
)(App);
