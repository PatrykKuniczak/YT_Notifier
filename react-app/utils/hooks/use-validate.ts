import { useState } from 'react';

const useValidate = () => {
  const [isValid, setIsValid] = useState(false);

  const handleValidation = (inputContent: string) => {
    const inputContentLength = inputContent.length;

    if (inputContentLength < 3 || inputContentLength > 255) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  return { isValid, handleValidation };
};

export default useValidate;
