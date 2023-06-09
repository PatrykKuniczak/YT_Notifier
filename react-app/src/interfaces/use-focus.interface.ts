import { Ref } from 'react';

interface IUseFocus<T extends HTMLElement> {
    ref: Ref<T>;
    focus: () => void;
}

export default IUseFocus;
