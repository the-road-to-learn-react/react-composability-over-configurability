import React from "react";

import Select from "./Select";

const ConfigurationApproach = ({ options }) => {
  const [option, setOption] = React.useState(options[1].value);

  const handleChange = value => {
    setOption(value);
  };

  return (
    <Select value={option} options={options} handleChange={handleChange} />
  );
};

export default ConfigurationApproach;
