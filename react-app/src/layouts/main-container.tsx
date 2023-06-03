import { ReactNode } from 'react';
import { Stack } from '@mui/system';

export const StyledMainContainer = ({ children }: { children: ReactNode }) => {
    return (
        <Stack
            component="main"
            alignItems={'center'}
            spacing={1}
            sx={{
                width: 290,
                height: 600,

                p: 2,

                bgcolor: 'background.primary'
            }}>
            {children}
        </Stack>
    );
};
