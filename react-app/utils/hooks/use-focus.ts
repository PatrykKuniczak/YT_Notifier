import { useRef } from 'react';
import IUseFocus from '@root/utils/interfaces/use-focus.interface';

const useFocus = <T extends HTMLElement>(): IUseFocus<T> => {
	const ref = useRef<T | null>(null);

	const focus = () => {
		ref.current && ref.current.focus();
	};

	return { ref, focus };
};

export default useFocus;
