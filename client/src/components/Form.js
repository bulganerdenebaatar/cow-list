import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    console.log(e.target.value)
    this.setState({
      name: e.target.value
    })
  }
  handleChangeDescription(e) {
    console.log(e.target.value)
    this.setState({
      description: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const cowInfo = this.state
    this.props.createCow(cowInfo)
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Description:
          <input type="text" description={this.state.description} onChange={this.handleChangeDescription} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </>
    )
  }
}

export default Form;