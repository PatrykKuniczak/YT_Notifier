import { Ref } from 'react';
import { TVoid } from '@root/utils/types/types';

interface IUseFocus<T extends HTMLElement> {
	ref: Ref<T>;
	focus: TVoid;
}

export default IUseFocus;
