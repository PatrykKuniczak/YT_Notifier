import { TVoid } from '@types';
import { useLocalStorage, useMediaQuery } from 'usehooks-ts';

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

type TTernaryDarkMode = 'system' | 'dark' | 'light';

interface IUseTernaryDarkModeOutput {
  ternaryDarkMode: TTernaryDarkMode;
  isDarkMode: boolean;
  changeTheme: TVoid;
}

function useTernaryDarkMode(): IUseTernaryDarkModeOutput {
  const [ternaryDarkMode, setTernaryDarkMode] = useLocalStorage<TTernaryDarkMode>(
    'usehooks-ts-ternary-dark-mode',
    'system',
  );

  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);

  const isDarkMode = ternaryDarkMode === 'dark' || (ternaryDarkMode === 'system' && isDarkOS);

  const changeTheme = () =>
    setTernaryDarkMode(prevState => {
      switch (prevState) {
        case 'light':
          return 'dark';
        case 'system':
          return isDarkOS ? 'light' : 'dark';
        case 'dark':
          return 'light';
      }
    });

  return {
    ternaryDarkMode,
    isDarkMode,
    changeTheme,
  };
}

export default useTernaryDarkMode;
