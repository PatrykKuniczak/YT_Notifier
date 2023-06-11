import { ReactNode } from 'react';
import { Stack } from '@mui/system';

export const StyledMainContent = ({ children }: { children: ReactNode }) => (
    <Stack
        component="main"
        alignItems={'center'}
        spacing={1}
        useFlexGap={true}
        sx={{ p: 2, height: 'calc(100% - 56px)' }}>
        {children}
    </Stack>
);
