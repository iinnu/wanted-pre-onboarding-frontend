import { useState } from 'react';

const useField = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleValueChange];
};

export default useField;
