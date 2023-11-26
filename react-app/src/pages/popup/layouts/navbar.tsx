import savedTagsIcon from '@assets/img/saved-tags-icon.svg';
import searchIcon from '@assets/img/search-icon.svg';
import watchLaterIcon from '@assets/img/watch-later-icon.svg';
import { IUserYtVideos } from '@interfaces';
import { useTranslation } from '@internationalization';
import { Stack, styled } from '@mui/system';
import { StyledButton } from '@pages/popup/components/shared/button';
import { StyledIcon } from '@pages/popup/components/shared/icon';
import { TComponentTag, TVoid } from '@types';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const NavbarStyles = styled(Stack)<TComponentTag>(({ theme }) =>
  theme.unstable_sx({
    position: 'absolute',

    bottom: 54,

    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 1,

    width: 240,
    height: 60,

    p: 2,
    borderRadius: 10,

    backgroundColor: 'background.purple',

    transform: `translateX(${(300 - 240) / 2}px)`,
  }),
);

export const StyledNavbar = ({ playlistId, focus }: Pick<IUserYtVideos, 'playlistId'> & { focus: TVoid }) => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const { t } = useTranslation();

  return (
    <NavbarStyles component="nav" direction={'row'}>
      <StyledButton
        title={t('nav.foundVideo')}
        aria-label={t('nav.foundVideo')}
        className={pathname === '/' ? 'active' : ''}
        onClick={() => {
          navigate('');
          focus();
        }}>
        <StyledIcon src={searchIcon} alt={''} width={20} height={20} />
      </StyledButton>

      <StyledButton
        title={t('nav.savedKeywords')}
        aria-label={t('nav.savedKeywords')}
        className={pathname === '/store' ? 'active' : ''}
        onClick={() => {
          navigate('/store');
          focus();
        }}>
        <StyledIcon src={savedTagsIcon} alt={''} width={20} height={20} />
      </StyledButton>

      <StyledButton
        title={t('nav.watchLater')}
        aria-label={t('nav.watchLater')}
        onClick={() => {
          if (playlistId === null) {
            toast.info(t('noPlaylistFound'), {
              toastId: 'noPlaylistFound',
            });
          } else chrome.tabs.create({ url: `https://www.youtube.com/playlist?list=${playlistId}` });
        }}>
        <StyledIcon src={watchLaterIcon} alt={''} width={20} height={20} />
      </StyledButton>
    </NavbarStyles>
  );
};
