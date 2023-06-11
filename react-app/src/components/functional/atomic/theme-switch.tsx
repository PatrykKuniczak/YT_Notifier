import clsx from 'clsx';
import { styled } from '@mui/system';
import useSwitch, { UseSwitchParameters } from '@mui/base/useSwitch';
import lightIcon from '../../../assets/light-icon.svg';
import darkIcon from '../../../assets/dark-icon.svg';
import { useTernaryDarkMode } from 'usehooks-ts';

export const StyledThemeSwitch = (props: UseSwitchParameters) => {
    const { setTernaryDarkMode } = useTernaryDarkMode();
    const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

    const stateClasses = {
        checked,
        disabled,
        focusVisible
    };

    const changeTheme = () =>
        setTernaryDarkMode(prevState =>
            prevState === 'dark' ? 'light' : 'dark'
        );

    return (
        <SwitchRoot>
            <SwitchTrack>
                <SwitchThumb className={clsx(stateClasses)} />
            </SwitchTrack>
            <SwitchInput
                {...getInputProps()}
                aria-label="Theme switcher"
                onClick={changeTheme}
            />
        </SwitchRoot>
    );
};

const SwitchRoot = styled('span')(({ theme }) =>
    theme.unstable_sx({
        position: 'relative',

        display: 'inline-block',

        width: 36,
        height: 20
    })
);

const SwitchInput = styled('input')(({ theme }) =>
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

const SwitchThumb = styled('span')(({ theme }) =>
    theme.unstable_sx({
        position: 'absolute',

        inset: 1,

        display: 'grid',
        placeItems: 'center',

        width: 18,
        height: 18,

        p: 0.2,
        borderRadius: '50%',

        bgcolor: '#fff',

        transform: 'translateX(0px)',
        transition: 'transform .5s ease-in-out',

        '&.focusVisible': {
            bgcolor: '#dcc8ff'
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

const SwitchTrack = styled('div')(({ theme }) =>
    theme.unstable_sx({
        width: 36,
        height: 20,

        borderRadius: 10,

        bgcolor: 'background.purple'
    })
);