import { IEditKeywordRef, IStyledStoreItem } from '@interfaces';
import { Stack, styled } from '@mui/system';
import { StyledDeleteButton } from '@pages/popup/components/store/list/item/deleteButton/delete-button';
import { StyledEditButton } from '@pages/popup/components/store/list/item/editButton/edit-button';
import { StyledKeyword } from '@pages/popup/components/store/list/item/keyword';
import { TComponentTag } from '@types';
import { useRef } from 'react';

const StyledStoreItemWrapper = styled(Stack)<TComponentTag>(({ theme }) =>
  theme.unstable_sx({
    alignItems: 'baseline',
    gap: 1,

    width: '100%',

    px: 1,
    py: 0.5,

    borderRadius: 1,

    backgroundColor: 'background.secondary',

    cursor: 'pointer',

    '&:hover': {
      opacity: 0.85,
    },
  }),
);

export const StyledStoreItem = ({
  id,
  content,
  setKeywordToRemove,
  changeModalVisibility,
  openedInputId,
  changeOpenedInputId,
}: IStyledStoreItem) => {
  const ref = useRef<IEditKeywordRef>(null);

  return (
    <StyledStoreItemWrapper component={'li'} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
      <StyledKeyword
        ref={ref}
        id={id}
        content={content}
        openedInputId={openedInputId}
        changeOpenedInputId={changeOpenedInputId}
      />

      <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} useFlexGap={true} spacing={1.5}>
        <StyledEditButton
          id={id}
          openedInputId={openedInputId}
          changeOpenedInputId={() => ref.current?.handleApplyingChanges()}
        />
        <StyledDeleteButton
          setKeywordToRemove={() => setKeywordToRemove(id)}
          changeModalVisibility={changeModalVisibility}
        />
      </Stack>
    </StyledStoreItemWrapper>
  );
};
