import { Ref } from 'react';
import { TVoid } from '../types/common.types.ts';

interface IUseFocus<T extends HTMLElement> {
    ref: Ref<T>;
    focus: TVoid;
}

export default IUseFocus;
