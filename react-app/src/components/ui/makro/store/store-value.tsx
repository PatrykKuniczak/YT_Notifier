import { Stack, styled } from '@mui/system';
import { TComponentTag } from '../../../../types/common.types.ts';
import { StyledKeyword } from '../../atomic/store/keyword.ts';
import { StyledIcon } from '../../atomic/shared/icon.ts';
import editIcon from '../../../../assets/edit-icon.svg';
import trashIcon from '../../../../assets/trash-icon.svg';
import { StyledButton } from '../../../functional/atomic/button.ts';

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

export const StyledStoreItem = ({ keyword }: { keyword: string }) => (
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
            <StyledButton sx={{ height: 16 }}>
                <StyledIcon
                    src={editIcon}
                    alt={'Edit Button'}
                />
            </StyledButton>

            <StyledButton sx={{ height: 16 }}>
                <StyledIcon
                    src={trashIcon}
                    alt={'Trash Button'}
                />
            </StyledButton>
        </Stack>
    </StoreListItem>
);
