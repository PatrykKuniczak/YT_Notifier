import { Stack, styled } from '@mui/system';
import { TChildren, TComponentTag } from '../../../types/common.types.ts';

const VideosSectionStyles = styled(Stack)<TComponentTag>(({ theme }) =>
    theme.unstable_sx({
        overflow: 'auto',

        alignItems: 'center',
        gap: 1,

        mb: 1,
        borderRadius: 1,

        '&:hover': {
            '&::-webkit-scrollbar-thumb': {
                bgcolor: '#7846F0'
            },

            '&::-webkit-scrollbar-thumb:active': {
                bgcolor: '#581fe1'
            }
        },

        '&::-webkit-scrollbar': {
            width: 12
        },

        '&::-webkit-scrollbar-track': {
            my: 1
        },
        '&::-webkit-scrollbar-thumb': {
            border: '2px solid transparent',
            borderRadius: 10,

            bgcolor: 'transparent',
            backgroundClip: 'padding-box'
        }
    })
);

export const StyledVideosSection = ({ children }: TChildren) => (
    <VideosSectionStyles component={'section'}>{children}</VideosSectionStyles>
);
