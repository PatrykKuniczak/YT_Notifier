import { Stack } from '@mui/system';
import { ReactNode } from 'react';

export const StyledVideosSection = ({ children }: { children: ReactNode }) => {
    return (
        <Stack
            component="section"
            alignItems={'center'}
            spacing={1}
            sx={{
                overflow: 'auto',

                bgcolor: 'background.primary'
            }}>
            {children}
        </Stack>
    );
};
export default {};
