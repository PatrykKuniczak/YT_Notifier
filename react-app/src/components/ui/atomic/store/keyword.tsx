import { styled } from '@mui/system';
import { textMixin } from '../../../../data/mixins/text-mixin.ts';
import { Ref } from 'react';
import useFocus from '../../../../hooks/use-focus.ts';

// TODO: UPDATE PACKAGE.JSON
const keywordStyles = {
    ...textMixin,

    px: 0.75,
    py: 0.25
};

const StyledKeywordSpan = styled('span')(({ theme }) =>
    theme.unstable_sx({
        ...keywordStyles
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
    openedInput
}: {
    value: string;
    openedInput: boolean;
}) => {
    const { ref, focus } = useFocus();

    return openedInput ? (
        <StyledKeywordInput
            ref={ref as Ref<HTMLInputElement>}
            autoFocus={true}
            value={value}
            onMouseOver={focus}
            onChange={value => console.log(value)}
        />
    ) : (
        <StyledKeywordSpan>{value}</StyledKeywordSpan>
    );
};
