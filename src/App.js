import React from 'react';
import Component from './component';

function App() {
  const [value, setValue] = React.useState('10');

  return (
    <div>
      <Component
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default App;
