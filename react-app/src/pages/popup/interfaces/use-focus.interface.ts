import { Ref } from 'react';
import { TVoid } from "@pages/popup/types/common.types";

interface IUseFocus<T extends HTMLElement> {
    ref: Ref<T>;
    focus: TVoid;
}

export default IUseFocus;
