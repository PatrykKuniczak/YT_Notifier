import { useState } from 'react';
import { type ChangeEvent } from 'react';

const useValidate = () => {
  const [disabled, setDisabled] = useState(true);

  const handleValidation = (props: ChangeEvent<HTMLInputElement>) => {
    const validationNumber = props.target.value.length;

    if (validationNumber < 3 || validationNumber > 255) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  return { disabled, handleValidation };
};

export default useValidate;
