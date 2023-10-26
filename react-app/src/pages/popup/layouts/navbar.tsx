import savedTagsIcon from '@assets/img/saved-tags-icon.svg';
import searchIcon from '@assets/img/search-icon.svg';
import watchLaterIcon from '@assets/img/watch-later-icon.svg';
import { Stack, styled } from '@mui/system';
import { StyledButton } from '@pages/popup/components/shared/button';
import { StyledIcon } from '@pages/popup/components/shared/icon';
import { TComponentTag, TVoid } from '@types';
import { useLocation, useNavigate } from 'react-router-dom';

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

export const StyledNavbar = ({ focus }: { focus: TVoid }) => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  return (
    <NavbarStyles component="nav" direction={'row'}>
      <StyledButton
        title="Znalezione Wideo"
        aria-label="Znalezione Wideo"
        className={pathname === '/' ? 'active' : ''}
        onClick={() => {
          navigate('');
          focus();
        }}>
        <StyledIcon src={searchIcon} alt={'Search magnifier'} width={20} height={20} />
      </StyledButton>

      <StyledButton
        title="Zapisane słowa kluczowe"
        aria-label="Zapisane słowa kluczowe"
        className={pathname === '/store' ? 'active' : ''}
        onClick={() => {
          navigate('/store');
          focus();
        }}>
        <StyledIcon src={savedTagsIcon} alt={'Saved tags navigation button'} width={20} height={20} />
      </StyledButton>

      <StyledButton
        title="Obejrzyj później"
        aria-label="Obejrzyj później"
        onClick={() => {
          chrome.tabs.create({ url: 'https://www.youtube.com/playlist?list=WL' });
        }}>
        <StyledIcon src={watchLaterIcon} alt={'YT Watch Later navigation button'} width={20} height={20} />
      </StyledButton>
    </NavbarStyles>
  );
};
