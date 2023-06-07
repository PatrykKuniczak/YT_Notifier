import { Stack } from '@mui/system';
import { ReactNode } from 'react';

export const StyledVideosSection = ({ children }: { children: ReactNode }) => {
    return (
        <Stack
            component={'section'}
            alignItems={'center'}
            useFlexGap={true}
            spacing={1}
            sx={{
                overflow: 'auto',

                bgcolor: 'background.primary',

                '&::-webkit-scrollbar': {
                    width: 12
                },

                '&::-webkit-scrollbar-track': {
                    my: 1
                },

                '&::-webkit-scrollbar-thumb': {
                    border: '2px solid transparent',
                    borderRadius: 2,

                    bgcolor: '#7846F0',
                    backgroundClip: 'padding-box'
                },

                '&::-webkit-scrollbar-thumb:hover': {
                    bgcolor: '#6833fc'
                },

                '&::-webkit-scrollbar-thumb:active': {
                    bgcolor: '#581fe1'
                }
            }}>
            {children}
        </Stack>
    );
};
