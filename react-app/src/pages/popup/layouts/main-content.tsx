import { Stack, styled } from '@mui/system';
import { TChildren, TComponentTag } from "@pages/popup/types/common.types";

const MainContentStyles = styled(Stack)<TComponentTag>(({ theme }) =>
    theme.unstable_sx({
        gap: 1,

        height: 'calc(100% - 56px)',

        px: 2,
        pb: 1
    })
);

export const StyledMainContent = ({ children }: TChildren) => (
    <MainContentStyles component="main">{children}</MainContentStyles>
);
