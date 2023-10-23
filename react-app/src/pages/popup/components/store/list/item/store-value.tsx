import httpClient from '@http-client';
import { Stack, styled } from '@mui/system';
import { StyledDeleteModal } from '@pages/popup/components/shared/delete-modal/delete-modal';
import { useDeleteModal } from '@pages/popup/components/shared/delete-modal/use-delete-modal';
import { StyledDeleteButton } from '@pages/popup/components/store/list/item/deleteButton/delete-button';
import { StyledEditButton } from '@pages/popup/components/store/list/item/editButton/edit-button';
import { StyledKeyword } from '@pages/popup/components/store/list/item/keyword';
import queryClient, { useMutation } from '@query-client';
import { TComponentTag } from '@types';
import urls from '@utils/endpoints/urls';
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

export const StyledStoreItem = ({ id, content }: { id: number; content: string }) => {
  const [openedInput, setOpenedInput] = useState(false);

  const changeInputVisibility = () => setOpenedInput(prevState => !prevState);
  const { open, changeModalVisibility } = useDeleteModal();

  const { mutate: removeKeyword } = useMutation({
    mutationFn: ({ id }: { id: number }) => httpClient.delete(`${urls.keywords}/${id}`),
    onSuccess: () => queryClient.invalidateQueries([urls.keywords]),
  });

  return (
    <>
      <StyledStoreItemWrapper component={'li'} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <StyledKeyword
          id={id}
          value={content}
          openedInput={openedInput}
          changeInputVisibility={changeInputVisibility}
        />

        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} useFlexGap={true} spacing={1.5}>
          <StyledEditButton openedInput={openedInput} changeInputVisibility={changeInputVisibility} />
          <StyledDeleteButton changeModalVisibility={changeModalVisibility} />
        </Stack>
      </StyledStoreItemWrapper>

      <StyledDeleteModal
        open={open}
        content={<>Czy jesteś pewien, że chcesz to usunąć?</>}
        onConfirm={() => removeKeyword({ id })}
        changeModalVisibility={changeModalVisibility}
      />
    </>
  );
};
