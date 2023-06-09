import { Stack } from '@mui/system';
import { ReactNode } from 'react';

export const StyledVideosSection = ({ children }: { children: ReactNode }) => (
    <Stack
        component={'section'}
        alignItems={'center'}
        useFlexGap={true}
        spacing={1}
        sx={{
            overflow: 'auto',

            mb: 1,
            borderRadius: 1,

            bgcolor: 'background.primary',

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
        }}>
        {children}
    </Stack>
);
