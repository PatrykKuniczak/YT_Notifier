import { useState } from 'react';

const useValidate = (): {
  disable: boolean;
  handleValidation: (event: React.ChangeEvent<HTMLInputElement>) => void;
} => {
  const [disable, setDisable] = useState(true);

  const handleValidation = (props: React.ChangeEvent<HTMLInputElement>) => {
    const validationNumber = props.target.value.length;

    if (validationNumber < 3 || validationNumber > 6) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };

  return { disable, handleValidation };
};

export default useValidate;
