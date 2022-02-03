import React from 'react';
import CowList from './CowList';
import Form from './Form';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: []
    }
    this.getCows = this.getCows.bind(this);
    this.createCow = this.createCow.bind(this);
  }
  componentDidMount() {
    this.getCows();
  }

  getCows() {
    axios({
      method: 'get',
      url: '/api/cows'
    })
    .then((response) => {
      // console.log(response)
      this.setState({
        cows: response.data
      })
    })
  }

  createCow(cowInfo) {
    var data = cowInfo
    // console.log(data)
    axios({
      method: 'post',
      url: './api/cows',
      params: data
    })
    .then((response) => {
      console.log(response)
      this.getCows();
    })
  }

  render() {
    return (
      <>
      <h1> Cow List</h1>
      <Form createCow={this.createCow}/>
      <CowList cows={this.state.cows}/>
      </>
    )
  }
}


export default App;