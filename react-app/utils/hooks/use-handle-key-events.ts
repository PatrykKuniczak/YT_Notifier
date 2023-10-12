import { KeyboardEvent } from 'react';
import { TVoid } from '@root/utils/types/types';

export const useHandleKeyEvents = () => {
	const handleKeyEvent = (event: KeyboardEvent, escapeAction?: TVoid, enterAction?: TVoid) => {
		if (escapeAction && event.key === 'Escape') escapeAction();
		if (enterAction && event.key === 'Enter') enterAction();
	};

	return {
		handleKeyEvent,
	};
};
