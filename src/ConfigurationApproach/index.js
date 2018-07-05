import React, { Component } from 'react';

import Select from './Select';

class ConfigurationApproach extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.options[1].value,
    };
  }

  handleChange = value => {
    this.setState({ value });
  }

  render () {
    return (
      <Select
        value={this.state.value}
        options={this.props.options}
        handleChange={this.handleChange}
      />
    );
  }
}

export default ConfigurationApproach;
