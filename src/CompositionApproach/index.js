import React from "react";

import Select from "./Select";
import Option from "./Option";

const CompositionApproach = ({ options }) => {
  const [option, setOption] = React.useState(options[1].value);

  const handleChange = value => {
    setOption(value);
  };

  return (
    <Select value={option} handleChange={handleChange}>
      {options.map(option => (
        <Option key={option.value} {...option} />
      ))}
    </Select>
  );
};

export default CompositionApproach;
