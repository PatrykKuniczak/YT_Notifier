import { ReactNode } from 'react';
import { Stack } from '@mui/system';

export const StyledMainContent = ({ children }: { children: ReactNode }) => {
    return (
        <Stack
            component="main"
            alignItems={'center'}
            spacing={1}
            useFlexGap={true}
            sx={{
                position: 'relative',
                width: 300,
                height: 600,

                p: 2,
                bgcolor: 'background.primary'
            }}>
            {children}
        </Stack>
    );
};
