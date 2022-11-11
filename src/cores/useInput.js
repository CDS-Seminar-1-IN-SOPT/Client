import { useState } from 'react';

function useInput() {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleValue = (value) => {
    setValue(value);
  };

  return { value, handleValue, onChange };
}

export default useInput;
