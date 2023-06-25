import { Stack, styled } from '@mui/system';
import { TComponentTag, TVoid } from '../../../../types/common.types.ts';
import { StyledKeyword } from '../../../functional/atomic/store/keyword.tsx';
import { StyledEditButton } from '../../../functional/micro/store/editButton/edit-button.tsx';
import { StyledDeleteButton } from '../../../functional/micro/store/deleteButton/delete-button.tsx';
import { useState } from 'react';

const StyledStoreListItem = styled(Stack)<TComponentTag>(({ theme }) =>
    theme.unstable_sx({
        gap: 1,

        width: '100%',

        px: 1,
        py: 0.5,

        borderRadius: 1,
        bgcolor: 'background.secondary',

        cursor: 'pointer',

        '&:hover': {
            opacity: 0.85
        }
    })
);

export const StyledStoreItem = ({
    keyword,
    changeModalVisibility
}: {
    keyword: string;
    changeModalVisibility: TVoid;
}) => {
    const [openedInput, setOpenedInput] = useState(false);

    const changeInputVisibility = () => setOpenedInput(prevState => !prevState);

    return (
        <StyledStoreListItem
            component={'li'}
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}>
            <StyledKeyword
                value={keyword}
                openedInput={openedInput}
                changeInputVisibility={changeInputVisibility}
            />

            <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                useFlexGap={true}
                spacing={1.5}>
                <StyledEditButton
                    openedInput={openedInput}
                    changeInputVisibility={changeInputVisibility}
                />
                <StyledDeleteButton
                    changeModalVisibility={changeModalVisibility}
                />
            </Stack>
        </StyledStoreListItem>
    );
};
