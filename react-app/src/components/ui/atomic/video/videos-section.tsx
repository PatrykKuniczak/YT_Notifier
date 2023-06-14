import { Stack, styled } from '@mui/system';
import { TChildren, TComponentTag } from '../../../../types/common.types.ts';
import { scrollbarMixin } from '../../../../data/mixins/scrollbar-mixin.ts';

const VideosSectionStyles = styled(Stack)<TComponentTag>(({ theme }) =>
    theme.unstable_sx({
        ...scrollbarMixin,

        overflow: 'scroll',

        alignItems: 'center',
        gap: 1,

        pb: 12,
        mb: 1,
        borderRadius: 1,

        '&::-webkit-scrollbar-track': {
            mb: 12
        }
    })
);

export const StyledVideosSection = ({ children }: TChildren) => (
    <VideosSectionStyles component={'section'}>{children}</VideosSectionStyles>
);
