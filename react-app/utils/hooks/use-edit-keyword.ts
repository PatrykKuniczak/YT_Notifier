import { useState } from 'react';
import useFocus from '@root/utils/hooks/use-focus';

export const useEditKeyword = (defaultValue = '') => {
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
