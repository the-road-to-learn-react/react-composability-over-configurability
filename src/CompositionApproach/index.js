import React, { Component } from 'react';

import Select from './Select';
import Option from './Option';

class CompositionApproach extends Component {
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
        handleChange={this.handleChange}
      >
        {this.props.options.map(option =>
          <Option key={option.value} {...option} />
        )}
      </Select>
    );
  }
}

export default CompositionApproach;
