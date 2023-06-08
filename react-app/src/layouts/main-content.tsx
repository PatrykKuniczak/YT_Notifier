import { ReactNode } from 'react';
import { Stack } from '@mui/system';

export const StyledMainContent = ({ children }: { children: ReactNode }) => (
    <Stack
        component="main"
        alignItems={'center'}
        spacing={1}
        useFlexGap={true}
        sx={{
            position: 'relative',

            width: 300,
            height: 600,

            bgcolor: 'background.primary'
        }}>
        {children}
    </Stack>
);
