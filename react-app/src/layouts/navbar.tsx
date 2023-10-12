import { Stack, styled } from '@mui/system';
import { TComponentTag, TVoid } from '../types/common.types.ts';
import { StyledIcon } from '../components/shared/icon.ts';
import searchIcon from '../assets/search-icon.svg';
import savedTagsIcon from '../assets/saved-tags-icon.svg';
import watchLaterIcon from '../assets/watch-later-icon.svg';
import { StyledButton } from '../components/shared/button.ts';
import { useNavigate, useLocation } from 'react-router-dom';

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

        transform: `translateX(${(300 - 240) / 2}px)`
    })
);

export const StyledNavbar = ({ focus }: { focus: TVoid }) => {
    const navigate = useNavigate();

    const { pathname } = useLocation();

    return (
        <NavbarStyles
            component="nav"
            direction={'row'}>
            <StyledButton
                className={pathname === '/videos' ? 'active' : ''}
                onClick={() => {
                    navigate('/videos');
                    focus();
                }}>
                <StyledIcon
                    src={searchIcon}
                    alt={'Search magnifier'}
                    width={20}
                    height={20}
                />
            </StyledButton>

            <StyledButton
                className={pathname === '/store' ? 'active' : ''}
                onClick={() => {
                    navigate('/store');
                    focus();
                }}>
                <StyledIcon
                    src={savedTagsIcon}
                    alt={'Saved tags navigation button'}
                    width={20}
                    height={20}
                />
            </StyledButton>

            <StyledButton>
                <StyledIcon
                    src={watchLaterIcon}
                    alt={'YT Watch Later navigation button'}
                    width={20}
                    height={20}
                />
            </StyledButton>
        </NavbarStyles>
    );
};
