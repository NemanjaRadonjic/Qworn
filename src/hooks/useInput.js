import { useState } from 'react';

const useInput = initialState => {
  const [input, setInput] = useState(initialState);

  const onChange = event => {
    setInput({ ...input, [event.target.name]: event.target.value });
    console.log(input);
  };

  return [input, onChange];
};

export default useInput;
