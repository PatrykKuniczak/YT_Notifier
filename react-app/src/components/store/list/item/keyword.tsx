import { styled } from '@mui/system';
import { textMixin } from '../../../../data/mixins/text-mixin.ts';
import { Ref } from 'react';
import { useBasicLogic } from '../../../../hooks/use-basic-logic.ts';
import { IStyledKeyword } from '../../../../interfaces/use-keyword.interface.ts';

const keywordStyles = {
    ...textMixin,

    px: 0.75,
    py: 0.25
};

const StyledKeywordSpan = styled('span')(({ theme }) =>
    theme.unstable_sx({
        ...keywordStyles,

        overflow: 'hidden',

        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    })
);

const StyledKeywordInput = styled('input')(({ theme }) =>
    theme.unstable_sx({
        ...keywordStyles,

        width: '100%',

        borderRadius: 1,

        bgcolor: 'background.secondary',

        textAlign: 'start'
    })
);

export const StyledKeyword = ({
    value,
    openedInput,
    changeInputVisibility
}: IStyledKeyword) => {
    const {
        value: inputValue,
        handleStateChange,
        ref,
        focus,
        handleKeyEvent
    } = useBasicLogic(value);

    return openedInput ? (
        <StyledKeywordInput
            ref={ref as Ref<HTMLInputElement>}
            autoFocus={true}
            value={inputValue}
            onMouseOver={focus}
            onKeyDown={event =>
                handleKeyEvent(
                    event,
                    changeInputVisibility,
                    changeInputVisibility
                )
            }
            onChange={event => handleStateChange(event.target.value)}
        />
    ) : (
        <StyledKeywordSpan>{inputValue}</StyledKeywordSpan>
    );
};
