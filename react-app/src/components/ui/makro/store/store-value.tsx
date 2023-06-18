import { Stack, styled } from '@mui/system';
import { TComponentTag, TVoid } from '../../../../types/common.types.ts';
import { StyledKeyword } from '../../atomic/store/keyword.ts';
import { StyledDeleteButton } from '../../../functional/micro/store/deleteButton/delete-button.tsx';

const StoreListItem = styled(Stack)<TComponentTag>(({ theme }) =>
    theme.unstable_sx({
        gap: 1,

        width: '100%',

        p: 1,

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
}) => (
    <StoreListItem
        component={'li'}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <StyledKeyword>{keyword}</StyledKeyword>
        <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            useFlexGap={true}
            spacing={1.5}>
            <StyledDeleteButton changeModalVisibility={changeModalVisibility} />
        </Stack>
    </StoreListItem>
);
