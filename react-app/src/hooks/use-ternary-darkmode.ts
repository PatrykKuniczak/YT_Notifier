import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { useLocalStorage, useMediaQuery, useUpdateEffect } from 'usehooks-ts';

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

type TTernaryDarkMode = 'system' | 'dark' | 'light';

interface IUseTernaryDarkModeOutput {
    isDarkMode: boolean;
    ternaryDarkMode: TTernaryDarkMode;
    setTernaryDarkMode: Dispatch<SetStateAction<TTernaryDarkMode>>;
}

export function useTernaryDarkMode(): IUseTernaryDarkModeOutput {
    const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
    const [ternaryDarkMode, setTernaryDarkMode] =
        useLocalStorage<TTernaryDarkMode>(
            'usehooks-ts-ternary-dark-mode',
            'system'
        );
    const [isDarkMode, setDarkMode] = useState<boolean>(
        isDarkOS ? isDarkOS : ternaryDarkMode === 'dark'
    );

    // Update darkMode if os prefers changes
    useUpdateEffect(() => {
        if (ternaryDarkMode === 'system') {
            setDarkMode(isDarkOS);
        }
    }, [isDarkOS]);

    useEffect(() => {
        switch (ternaryDarkMode) {
            case 'light':
                setDarkMode(false);
                break;
            case 'system':
                setDarkMode(isDarkOS);
                break;
            case 'dark':
                setDarkMode(true);
                break;
        }
    }, [ternaryDarkMode, isDarkOS]);

    return {
        isDarkMode,
        ternaryDarkMode,
        setTernaryDarkMode
    };
}
