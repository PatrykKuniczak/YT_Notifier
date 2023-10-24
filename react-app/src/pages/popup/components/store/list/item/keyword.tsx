import useEditKeyword from '@hooks/use-edit-keyword';
import useHandleKeyEvents from '@hooks/use-handle-key-events';
import useValidate from '@hooks/use-validate';
import httpClient from '@http-client';
import { IStyledKeyword } from '@interfaces';
import { FormControl } from '@mui/base';
import { styled } from '@mui/system';
import { StyledErrorMessage } from '@pages/popup/components/shared/error';
import StyledInput from '@pages/popup/components/shared/input';
import { textMixin } from '@utils/data/mixins/text-mixin';
import { useMutation } from '@root/utils/libs/query-client';
import urls from '@utils/endpoints/urls';

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

export const StyledKeyword = ({ id, value, openedInput, changeInputVisibility }: IStyledKeyword) => {
  const { handleKeyEvent } = useHandleKeyEvents();
  const { value: inputValue, handleStateChange, previousValue, handlePreviousValueChange } = useEditKeyword(value);

  const { mutate: editKeyword } = useMutation({
    mutationFn: (content: { content: string }) => httpClient.patch(`${urls.keyWords}/${id}`, content),
  });

  const { isValid, handleValidation } = useValidate();

  const handleApplyingChanges = () => {
    if (isValid) {
      handlePreviousValueChange(inputValue);
      editKeyword({ content: inputValue });
    }
    changeInputVisibility();
  };

  return openedInput ? (
    <FormControl
      defaultValue=""
      required
      onChange={event => {
        handleStateChange(event.target.value);
        handleValidation(event.target.value.length);
      }}
      value={inputValue}
      style={{ width: '100%', position: 'relative' }}>
      <StyledKeywordInput
        placeholder="Podaj słowo kluczowe"
        onKeyDown={event => handleKeyEvent(event, handleApplyingChanges, handleApplyingChanges)}
      />
      <StyledErrorMessage />
    </FormControl>
  ) : (
    <StyledKeywordSpan>{previousValue}</StyledKeywordSpan>
  );
};
