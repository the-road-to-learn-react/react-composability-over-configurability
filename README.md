# react-composability-over-configurability

[![Build Status](https://travis-ci.org/the-road-to-learn-react/react-composability-over-configurability.svg?branch=master)](https://travis-ci.org/the-road-to-learn-react/react-composability-over-configurability) [![Slack](https://slack-the-road-to-learn-react.wieruch.com/badge.svg)](https://slack-the-road-to-learn-react.wieruch.com/) [![Greenkeeper badge](https://badges.greenkeeper.io/the-road-to-learn-react/react-composability-over-configurability.svg)](https://greenkeeper.io/)

React gives you the power of composing components into each other with its children prop. You should make use of it rather than passing "configurational" props to one complex component. That way you keep your components lightweight and give yourself lots of flexibility for adjustments.

```
const OPTIONS = [
  { value: 'grapefruit', label: 'Grapefruit' },
  { value: 'lime', label: 'Lime' },
  { value: 'coconut', label: 'Coconut' },
  { value: 'mango', label: 'Mango' },
];

// Configuration
// the Select components has the <select> and <option> elements within one complex component
<Select
  value={this.state.value}
  options={this.props.options}
  handleChange={this.handleChange}
/>

// Composition
// the Select component has only the <select> element
// the Option component has only the <option> element
// advantages: lightweight components, flexible way of composing components into each other
<Select
  value={this.state.value}
  handleChange={this.handleChange}
>
  {this.props.options.map(option =>
    <Option key={option.value} {...option} />
  )}
</Select>
```

## Installation

* `git clone git@github.com:the-road-to-learn-react/react-composability-over-configurability.git`
* cd react-composability-over-configurability
* npm install
* npm start
* visit `http://localhost:3000/`
