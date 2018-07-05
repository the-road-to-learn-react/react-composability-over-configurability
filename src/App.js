import React, { Fragment } from 'react';

import ConfigurationApproach from './ConfigurationApproach';
import CompositionApproach from './CompositionApproach';

const OPTIONS = [
  { value: 'grapefruit', label: 'Grapefruit' },
  { value: 'lime', label: 'Lime' },
  { value: 'coconut', label: 'Coconut' },
  { value: 'mango', label: 'Mango' },
];

const App = () =>
  <Fragment>
    <ConfigurationApproach options={OPTIONS} />
    <CompositionApproach options={OPTIONS} />
  </Fragment>

export default App;
