import { Stack, styled } from '@mui/system';
import { StyledDeleteButton } from '@pages/popup/components/store/list/item/deleteButton/delete-button';
import { StyledEditButton } from '@pages/popup/components/store/list/item/editButton/edit-button';
import { StyledKeyword } from '@pages/popup/components/store/list/item/keyword';
import { TComponentTag, TVoid } from '@types';
import { useState } from 'react';

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
}: {
  id: number;
  content: string;
  setKeywordToRemove: (id: number) => void;
  changeModalVisibility: TVoid;
}) => {
  const [openedInput, setOpenedInput] = useState(false);

  const changeInputVisibility = () => setOpenedInput(prevState => !prevState);

  return (
    <StyledStoreItemWrapper component={'li'} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
      <StyledKeyword id={id} value={content} openedInput={openedInput} changeInputVisibility={changeInputVisibility} />

      <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} useFlexGap={true} spacing={1.5}>
        <StyledEditButton openedInput={openedInput} changeInputVisibility={changeInputVisibility} />
        <StyledDeleteButton
          setKeywordToRemove={() => setKeywordToRemove(id)}
          changeModalVisibility={changeModalVisibility}
        />
      </Stack>
    </StyledStoreItemWrapper>
  );
};
