import { Stack, styled } from '@mui/system';
import { TComponentTag } from '../types/common.types.ts';
import { StyledIcon } from '../components/ui/atomic/shared/icon.ts';
import searchIcon from '../assets/search-icon.svg';
import savedTagsIcon from '../assets/saved-tags-icon.svg';
import watchLaterIcon from '../assets/watch-later-icon.svg';
import { StyledButton } from '../components/functional/atomic/shared/button.ts';
import { useNavigate } from 'react-router-dom';

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

        bgcolor: 'background.purple',

        transform: `translateX(${(300 - 240) / 2}px)`
    })
);

export const StyledNavbar = () => {
    const navigate = useNavigate();

    return (
        <NavbarStyles
            component="nav"
            direction={'row'}>
            <StyledButton onClick={() => navigate('/')}>
                <StyledIcon
                    src={searchIcon}
                    alt={'Search magnifier'}
                    width={20}
                    height={20}
                />
            </StyledButton>

            <StyledButton onClick={() => navigate('/store')}>
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
