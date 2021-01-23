import React from 'react';
import Component from './component';

function App() {
  const [value, setValue] = React.useState('10000000.24527');

  return (
    <div>
      <Component
        type="number"
        value={value}
        decimals={3}
        prefix="$"
        step={0.5}
        onChange={(e) => {
          // console.log(e.target.inputValue);
          setValue(e.target.inputValue);
        }}
      />
    </div>
  );
}

export default App;

/* <Component
  type="number"
  value={value}
  decimals={3}
  prefix="$"
  suffix="%"
  onChange={(e) => setValue(e.target.value)}
/> */
