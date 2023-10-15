import useEditKeyword from '@hooks/use-edit-keyword';
import useHandleKeyEvents from '@hooks/use-handle-key-events';
import { IStyledKeyword } from '@interfaces';
import { FormControl } from '@mui/base';
import { styled } from '@mui/system';
import { StyledErrorMessage } from '@pages/popup/components/shared/error';
import StyledInput from '@pages/popup/components/shared/input';
import { textMixin } from '@pages/popup/data/mixins/text-mixin';

const keywordStyles = {
  ...textMixin,

  px: 0.75,
  py: 0.25,
};

const StyledKeywordSpan = styled('span')(({ theme }) =>
  theme.unstable_sx({
    ...keywordStyles,

    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',

    overflow: 'hidden',
  }),
);

const StyledKeywordInput = styled(StyledInput)(({ theme }) =>
  theme.unstable_sx({
    ...keywordStyles,

    width: '100%',

    borderRadius: 1,

    backgroundColor: 'background.secondary',

    textAlign: 'start',
  }),
);

export const StyledKeyword = ({ value, openedInput, changeInputVisibility }: IStyledKeyword) => {
  const { handleKeyEvent } = useHandleKeyEvents();
  const {
    focus,
    value: inputValue,
    handleStateChange,
    previousValue,
    handlePreviousValueChange,
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
      style={{ width: '100%', position: 'relative' }}>
      <StyledErrorMessage />
      <StyledKeywordInput
        placeholder="Podaj słowo kluczowe"
        onMouseOver={focus}
        onKeyDown={event => handleKeyEvent(event, handleApplyingChanges, handleApplyingChanges)}
      />
    </FormControl>
  ) : (
    <StyledKeywordSpan>{previousValue}</StyledKeywordSpan>
  );
};
