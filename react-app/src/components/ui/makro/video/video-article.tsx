import { StyledThumbnail } from '../../atomic/video/thumbnail.ts';
import { Stack, styled } from '@mui/system';
import thumbnail from '../../../../assets/thumbnail.png';
import { StyledAuthorInfo } from '../../micro/video/author-info.tsx';
import { StyledVideoInfos } from '../../micro/video/video-infos.tsx';
import { TComponentTag } from '../../../../types/common.types.ts';

const VideoArticleStyles = styled(Stack)<TComponentTag>(({ theme }) =>
    theme.unstable_sx({
        justifyContent: 'center',
        gap: 1,

        p: 1,

        borderRadius: 1,

        backgroundColor: 'background.secondary',

        cursor: 'pointer'
    })
);
export const StyledVideoArticle = () => (
    <VideoArticleStyles component={'article'}>
        <StyledThumbnail
            src={thumbnail}
            alt={'YT Thumbnail'}
        />
        <StyledAuthorInfo />
        <StyledVideoInfos />
    </VideoArticleStyles>
);