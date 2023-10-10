import clsx from "clsx";
import { styled, SxProps } from "@mui/system";
import { useSwitch, UseSwitchParameters } from "@mui/base/useSwitch";
import lightIcon from "@assets/img/light-icon.svg";
import darkIcon from "@assets/img/dark-icon.svg";
import { useTernaryDarkMode } from "@root/utils/hooks/use-ternary-darkmode";

export const StyledThemeSwitch = (
    props: UseSwitchParameters & { sx?: SxProps }
) => {
    const { changeTheme, isDarkMode } = useTernaryDarkMode();
    const { getInputProps, checked, disabled, focusVisible } = useSwitch({
        ...props,
        checked: isDarkMode
    });

    const stateClasses = {
        checked,
        disabled,
        focusVisible
    };

    return (
        <StyledSwitchRoot sx={props.sx}>
            <StyledSwitchTrack>
                <StyledSwitchThumb className={clsx(stateClasses)} />
            </StyledSwitchTrack>
            <StyledSwitchInput
                {...getInputProps()}
                aria-label="Theme switcher"
                onClick={changeTheme}
            />
        </StyledSwitchRoot>
    );
};

const StyledSwitchRoot = styled('span')(({ theme }) =>
    theme.unstable_sx({
        position: 'relative',

        display: 'inline-block',

        width: 36,
        height: 20
    })
);

const StyledSwitchTrack = styled('div')(({ theme }) =>
    theme.unstable_sx({
        width: 36,
        height: 20,

        borderRadius: 10,

        backgroundColor: 'background.purple'
    })
);

const StyledSwitchThumb = styled('span')(({ theme }) =>
    theme.unstable_sx({
        position: 'absolute',

        inset: 1,

        display: 'grid',
        placeItems: 'center',

        width: 18,
        height: 18,

        p: 0.2,
        borderRadius: '50%',

        backgroundColor: '#fff',

        transform: 'translateX(0px)',
        transition: 'transform .5s ease-in-out',

        '&.focusVisible': {
            backgroundColor: '#dcc8ff'
        },

        '&.checked': {
            transform: 'translateX(16px)',

            '&::before': {
                backgroundImage: `url(${lightIcon})`
            }
        },

        '&::before': {
            content: '""',

            display: 'block',

            width: '100%',
            height: '100%',

            backgroundImage: `url(${darkIcon})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',

            transition: 'background-image .5s ease-in-out'
        }
    })
);

const StyledSwitchInput = styled('input')(({ theme }) =>
    theme.unstable_sx({
        position: 'absolute',
        zIndex: 1,

        inset: 1,

        width: '100%',
        height: '100%',

        opacity: 0,
        cursor: 'pointer'
    })
);
