import { useState } from 'react';

const useValidate = () => {
  const [isValid, setIsValid] = useState(true);

  const handleValidation = (inputContentLength: number) => {
    console.log(inputContentLength);
    if (inputContentLength < 3 || inputContentLength > 255) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  return { isValid, handleValidation };
};

export default useValidate;
