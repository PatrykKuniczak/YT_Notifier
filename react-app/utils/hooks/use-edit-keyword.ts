import useFocus from '@hooks/use-focus';
import { useState } from 'react';

const useEditKeyword = (defaultValue = '') => {
	const [previousValue, setPreviousValue] = useState(defaultValue);
	const [value, setValue] = useState(defaultValue);

	const { ref, focus } = useFocus();

	const handleStateChange = (content: string) => {
		setValue(content);
	};

	const handlePreviousValueChange = (content: string) => {
		setPreviousValue(content);
	};

	return {
		ref,
		focus,
		value,
		handleStateChange,
		previousValue,
		handlePreviousValueChange,
	};
};

export default useEditKeyword;
