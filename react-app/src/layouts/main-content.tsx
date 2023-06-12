import { Stack, styled } from '@mui/system';
import { TChildren, TComponentTag } from '../types/common.types.ts';

const MainContentStyles = styled(Stack)<TComponentTag>(({ theme }) =>
    theme.unstable_sx({
        alignItems: 'center',
        gap: 1,

        p: 2,

        height: 'calc(100% - 56px)'
    })
);

export const StyledMainContent = ({ children }: TChildren) => (
    <MainContentStyles component="main">{children}</MainContentStyles>
);
