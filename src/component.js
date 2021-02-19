import React from 'react';
import PropTypes from 'prop-types';
import { convertToLakhSeparator } from './utils';

function Component({
  value, decimals, type, prefix, suffix, step, onChange, ...props
}) {
  const [inputVal, setInputVal] = React.useState(0);
  const [wholeVal, setWholeVal] = React.useState(0);
  const input = React.useRef();

  const returnValue = (inputElemVal) => {
    if (onChange) {
      const localVal = Number(inputElemVal);
      const inputElem = Object.assign(input, {
        current: Object.assign(input.current, {
          inputValue: localVal
        })
      });
      onChange({ target: inputElem.current });
    }
  };

  const setVal = (valueParam) => {
    if (decimals) {
      const valToNumber = Number(valueParam);
      const newVal = valToNumber.toFixed(decimals);
      let valueWithPrefSuf = convertToLakhSeparator(Number(newVal));

      if (prefix) {
        valueWithPrefSuf = prefix + valueWithPrefSuf;
      }
      if (suffix) {
        valueWithPrefSuf += suffix;
      }

      setInputVal(newVal);
      setWholeVal(valueWithPrefSuf);
    }
    else {
      setWholeVal(valueParam);
    }
  };

  const setOnChangeVal = (valueParam) => {
    // const valToNumber = Number(valueParam);
    const valToNumber = valueParam;
    // let valueWithPrefSuf = convertToLakhSeparator(valToNumber);
    let valueWithPrefSuf = valToNumber;

    if (prefix) {
      valueWithPrefSuf = prefix + valueWithPrefSuf;
    }

    if (suffix) {
      valueWithPrefSuf += suffix;
    }

    setInputVal(valToNumber);
    setWholeVal(valueWithPrefSuf);
  };

  const handleOnChange = (e) => {
    const { value: inputText } = e.target;
    const inputValue = inputText.replace(/[^0-9][.]{1}/g, '');
    setOnChangeVal(inputValue);
  };

  const handlePlus = () => {
    let localVal = Number(inputVal);
    localVal += step;
    setOnChangeVal(localVal);
    returnValue(localVal);
  };

  const handleMinus = () => {
    let localVal = Number(inputVal);
    localVal -= step;
    setOnChangeVal(localVal);
    returnValue(localVal);
  };

  React.useEffect(() => {
    setVal(value);
  }, []);

  return (
    <div>
      <input
        type="text"
        onChange={handleOnChange}
        value={wholeVal}
        ref={input}
        {...props}
      />
      <button
        type="button"
        onClick={handlePlus}
      >
        +
      </button>
      <button
        type="button"
        onClick={handleMinus}
      >
        -
      </button>
    </div>
  );
}

export default Component;

Component.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  decimals: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool
  ]),
  type: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  step: PropTypes.number,
  onChange: PropTypes.func
};

Component.defaultProps = {
  value: '-',
  decimals: false,
  type: 'number',
  prefix: '',
  suffix: '',
  step: 1,
  onChange: () => {}
};
