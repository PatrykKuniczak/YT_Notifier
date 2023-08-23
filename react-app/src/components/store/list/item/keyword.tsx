import { styled } from '@mui/system';
import { textMixin } from '../../../../data/mixins/text-mixin.ts';
import { useBasicLogic } from '../../../../hooks/use-basic-logic.ts';
import { IStyledKeyword } from '../../../../interfaces/use-keyword.interface.ts';
import { useEditKeyword } from '../../../../hooks/use-edit-keyword.ts';
import { FormControl } from '@mui/base';
import Input from '../../../shared/input.tsx';
import { ErrorMessage } from '../../../shared/error.tsx';

const keywordStyles = {
    ...textMixin,

    px: 0.75,
    py: 0.25
};

const StyledKeywordSpan = styled('span')(({ theme }) =>
    theme.unstable_sx({
        ...keywordStyles,

        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',

        overflow: 'hidden'
    })
);

const StyledKeywordInput = styled(Input)(({ theme }) =>
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
    const { handleKeyEvent } = useBasicLogic();
    const {
        focus,
        value: inputValue,
        handleStateChange,
        previousValue,
        handlePreviousValueChange
    } = useEditKeyword(value);

    const handleApplyingChanges = () => {
        if (inputValue.length > 1) {
            handlePreviousValueChange(inputValue);
        }
        changeInputVisibility();
    };

    return openedInput ? (
        <FormControl
            defaultValue=""
            required
            onChange={event => handleStateChange(event.target.value)}
            value={inputValue}
            style={{ width: '100%' }}>
            <ErrorMessage />
            <StyledKeywordInput
                placeholder="Zmien słowo kluczowe"
                onMouseOver={focus}
                onKeyDown={event =>
                    handleKeyEvent(
                        event,
                        handleApplyingChanges,
                        handleApplyingChanges
                    )
                }
            />
        </FormControl>
    ) : (
        <StyledKeywordSpan>{previousValue}</StyledKeywordSpan>
    );
};
