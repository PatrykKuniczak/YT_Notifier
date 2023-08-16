import { StyledAvatar } from './avatar.ts';
import avatar from '../../assets/thumbnail.png';
import { StyledIcon } from './icon.ts';
import chevronUpIcon from '../../assets/chevron-up-icon.svg';
import chevronDownIcon from '../../assets/chevron-down-icon.svg';
import { Dropdown, Menu, MenuButton, MenuItem } from '@mui/base';
import { useState } from 'react';
import { styled, useTheme } from '@mui/system';

const StyledListbox = styled('ul')(({ theme }) =>
    theme.unstable_sx({
        position: 'absolute',

        right: '-30px',

        minWidth: '200px',

        margin: '12px 0',
        padding: '6px',
        border: `1px solid ${theme.palette.background.secondary}`,
        borderRadius: '12px',
        outline: 'transparent',

        background: theme.palette.background.primary,
        color: theme.palette.color.primary,

        fontSize: 'fontSize.sm',

        boxShadow: `0px 4px 30px ${theme.palette.background.secondary}`
    })
);

const StyledMenuItem = styled(MenuItem)(({ theme }) =>
    theme.unstable_sx({
        padding: '8px',
        borderRadius: '8px',

        userSelect: 'none',
        cursor: 'pointer',
        listStyle: 'none',

        '&:hover:not(.Mui-disabled)': {
            backgroundColor: theme.palette.background.secondary
        },

        '&.Mui-focusVisible': {
            outline: `1px solid #fff`,
            backgroundColor: theme.palette.background.secondary
        }
    })
);

const StyledMenuButton = styled(MenuButton)(({ theme }) =>
    theme.unstable_sx({
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem',

        minHeight: 'calc(1.5em + 22px)',

        padding: '8px 14px',
        borderRadius: '12px',

        backgroundColor: 'transparent',

        cursor: 'pointer'
    })
);

const Profile = () => {
    const [collapsed, setCollapsed] = useState(false);
    const theme = useTheme();

    const handleOpenChange = (_: unknown, open: boolean) => {
        setCollapsed(open);
    };

    return (
        <Dropdown onOpenChange={handleOpenChange}>
            <StyledMenuButton>
                <StyledAvatar
                    src={avatar}
                    alt={'Avatar'}
                    width={40}
                    height={40}
                />
                <StyledIcon
                    src={collapsed ? chevronUpIcon : chevronDownIcon}
                    alt={'Chevron'}
                    width={16}
                    height={16}
                    sx={{
                        filter: `${theme.palette.background.searchIconFilter}`
                    }}
                />
            </StyledMenuButton>
            <Menu slots={{ listbox: StyledListbox }}>
                <StyledMenuItem>Sign Out</StyledMenuItem>
            </Menu>
        </Dropdown>
    );
};

export default Profile;
