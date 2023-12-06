import useHandleKeyEvents from '@hooks/use-handle-key-events';
import useValidate from '@hooks/use-validate';
import httpClient from '@http-client';
import { IEditKeywordRef, IErrorWithCause, IStyledKeyword } from '@interfaces';
import { useTranslation } from '@internationalization';
import { FormControl } from '@mui/base';
import { styled } from '@mui/system';
import { StyledErrorMessage } from '@pages/popup/components/shared/error';
import StyledInput from '@pages/popup/components/shared/input';
import queryClient from '@query-client';
import { useMutation } from '@root/utils/libs/query-client';
import { textMixin } from '@utils/data/mixins/text-mixin';
import urls from '@utils/endpoints/urls';
import { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import { toast } from 'react-toastify';

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

export const StyledKeyword = forwardRef<IEditKeywordRef, IStyledKeyword>(
  ({ id, openedInputId, content, changeOpenedInputId }, inputRef) => {
    const { handleKeyEvent } = useHandleKeyEvents();
    const [inputValue, setInputValue] = useState(content);

    const isDirty = inputValue !== content;

    const handleStateChange = useCallback((content: string) => {
      setInputValue(content);
    }, []);

    const { t } = useTranslation();

    const { mutate: editKeyword } = useMutation({
      mutationFn: (content: { content: string }) => httpClient.patch(`${urls.keyWords}/${id}`, content),
      onSuccess: () => queryClient.invalidateQueries([urls.keyWords]),
      onError: (error: IErrorWithCause) =>
        toast.error(t([`keywordErrors.${error.response.data.cause}`, 'fallbackError'])),
    });

    const { isValid, handleValidation } = useValidate();

    const handleApplyingChanges = useCallback(() => {
      if (isValid && isDirty) {
        editKeyword({ content: inputValue });
      }

      if (id === openedInputId) {
        changeOpenedInputId(0);
        return;
      }
      changeOpenedInputId(id);
    }, [isValid, isDirty, openedInputId, changeOpenedInputId, editKeyword, inputValue, id]);

    useImperativeHandle(inputRef, () => {
      return { handleApplyingChanges };
    });

    return id === openedInputId ? (
      <FormControl
        defaultValue=""
        required
        onChange={event => {
          handleStateChange(event.target.value);
          handleValidation(event.target.value);
        }}
        value={inputValue}
        style={{ width: '100%', position: 'relative' }}>
        <StyledKeywordInput
          placeholder={t('provideKeyword')}
          onKeyDown={event => handleKeyEvent(event, handleApplyingChanges, handleApplyingChanges)}
        />
        <StyledErrorMessage />
      </FormControl>
    ) : (
      <StyledKeywordSpan>{inputValue}</StyledKeywordSpan>
    );
  },
);
