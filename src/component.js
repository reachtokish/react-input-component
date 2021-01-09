import React from 'react';

function Component({ onChange, ...props }) {
  const handleOnChange = (e) => {
    onChange(e);
  };

  return (
    <input
      type="number"
      onChange={handleOnChange}
      {...props}
    />
  );
}

export default Component;
