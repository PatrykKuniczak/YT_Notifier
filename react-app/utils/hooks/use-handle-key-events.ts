import { TVoid } from '@types';
import { KeyboardEvent } from 'react';

const useHandleKeyEvents = () => {
	const handleKeyEvent = (event: KeyboardEvent, escapeAction?: TVoid, enterAction?: TVoid) => {
		if (escapeAction && event.key === 'Escape') escapeAction();
		if (enterAction && event.key === 'Enter') enterAction();
	};

	return {
		handleKeyEvent,
	};
};

export default useHandleKeyEvents;
