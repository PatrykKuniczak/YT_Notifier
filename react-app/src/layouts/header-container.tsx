import { Stack, styled, useTheme } from '@mui/system';
import { StyledThemeSwitch } from '../components/shared/theme-switch.tsx';
import { StyledAvatar } from '../components/shared/avatar.ts';
import avatar from '../assets/thumbnail.png';
import { Dropdown, Menu, MenuButton, MenuItem } from '@mui/base';
import chevronDownIcon from '../assets/chevron-down-icon.svg';
import chevronUpIcon from '../assets/chevron-up-icon.svg';
import { StyledIcon } from '../components/shared/icon.ts';
import { useState } from 'react';

const HeaderContainerStyles = styled(Stack)(({ theme }) =>
    theme.unstable_sx({
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 1
    })
);

const StyledListbox = styled('ul')(({ theme }) =>
    theme.unstable_sx({
        position: 'absolute',
        zIndex: 1,

        right: '-30px',

        boxSizing: 'border-box',
        minWidth: '200px',

        margin: '12px 0',
        padding: '6px',
        border: `1px solid ${theme.palette.background.secondary}`,
        borderRadius: '12px',
        outline: '0px',

        background: theme.palette.background.primary,
        color: theme.palette.color.primary,

        fontSize: '0.875rem',

        overflow: 'auto',
        boxShadow: `0px 4px 30px ${theme.palette.background.secondary}`
    })
);

const StyledMenuItem = styled(MenuItem)(({ theme }) =>
    theme.unstable_sx({
        padding: '8px',
        borderRadius: '8px',

        userSelect: 'none',
        cursor: 'default',
        listStyle: 'none',

        '&:hover:not(.Mui-disabled)': {
            backgroundColor: theme.palette.background.secondary
        },

        '&.Mui-focusVisible': {
            outline: `1px solid #fff`,
            backgroundColor: theme.palette.background.secondary
        },

        '&:last-of-type': {
            borderBottom: 'none'
        }
    })
);

const StyledMenuButton = styled(MenuButton)(({ theme }) =>
    theme.unstable_sx({
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem',

        boxSizing: 'border-box',
        minHeight: 'calc(1.5em + 22px)',

        padding: '8px 14px',
        borderRadius: '12px',

        backgroundColor: 'transparent',

        fontSize: '0.875rem',
        fontWeight: 600,
        lineHeight: 1.5
    })
);

export const StyledHeaderContainer = () => {
    const [collapsed, setCollapsed] = useState(false);
    const theme = useTheme();

    const handleOpenChange = (_: unknown, open: boolean) => {
        setCollapsed(open);
    };

    return (
        <HeaderContainerStyles direction={'row'}>
            <StyledThemeSwitch />

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
        </HeaderContainerStyles>
    );
};
